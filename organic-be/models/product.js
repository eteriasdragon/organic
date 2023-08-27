import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mainInfo: String,
  addInfo: String,
  price: Number,
  discount: Number,
  imgUrl: String,
  category: String,
  rating: Number,
})

export default mongoose.model("Product", productSchema);