import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import PropTypes from "prop-types";
import OrderItemDetails from "../OrderItemDetails/OrderItemDetails.jsx";
import "./OrderItem.scss";

export default function OrderItem({details}) {
  return (
    <>
      <AccordionItem className="order-item">
        <AccordionItemHeading className="order-item__title-wrapper">
          <AccordionItemButton className="accordion__button order-item__title">
            <span>Order id: </span>{details.id}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <OrderItemDetails order={details.orderList} creds={{customer: details.customer, address: details.address, addInfo: details.addInfo, email: details.email, phone: details.phone}}/>
        </AccordionItemPanel>
      </AccordionItem>
    </>
  )
}

OrderItem.propTypes = {
  details: PropTypes.object.isRequired,
}