import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: Number,
  address: String,
  customer: String,
  addInfo: String,
  email: String,
  phone: String,
  orderList: Array,
})

export default mongoose.model("Order", orderSchema);