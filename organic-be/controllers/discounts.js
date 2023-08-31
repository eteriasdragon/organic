import {getDiscounts} from "../helpers/discounts.js";

 export const getAllDiscounts = async (req,res) => {
  const discountsList = await getDiscounts();
  res.send(discountsList);
}