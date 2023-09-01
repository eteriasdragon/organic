import {Accordion} from "react-accessible-accordion";
import OrderItem from "./OrderItem/OrderItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllOrders} from "../../redux/actions/orders.js";
import 'react-accessible-accordion/dist/fancy-example.css';
import "./OrdersList.scss";

import ExcelExport from 'export-xlsx';
import {SETTINGS_FOR_EXPORT} from './excel/setting.js';
import {Button} from "../index.js";
import {fetchAllProducts} from "../../redux/actions/products.js";

export default function OrdersList() {
  const orders = useSelector(state => state.orders.ordersList);
  const products = useSelector(state => state.products.productsArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(fetchAllProducts());
  }, [dispatch]);


  const exportToExcel = () => {
    const excelExport = new ExcelExport();

    const ordersToExport = orders.map(order => {
      return order.orderList.map(position => {
        const product = products.find(product => product.id === position.id);
        const priceWithDiscount = (product.price - product.price*product.discount/100).toFixed(2);
        const totalPrice = (priceWithDiscount*position.quantity).toFixed(2);
        return {
          id: order.id,
          customer: order.customer,
          totalPrice: totalPrice,
          product: product.name,
          price: priceWithDiscount,
          amount: position.quantity,
          email: order.email,
          phone: order.phone,
          address: order.address,
          message: order.addInfo,
        }
      });
    })
    const data = {
      table1: ordersToExport.flat()
    };

    excelExport.downloadExcel(SETTINGS_FOR_EXPORT, [data]);
  }

  return (
    <>
      <Button style="default" text="export" onClick={exportToExcel}/>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        {orders.map((order) => {
          return <OrderItem key={order.id} details={order}/>
        })}
      </Accordion>
    </>
  )
}