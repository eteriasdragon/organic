import {client} from "../index.js";

export async function getAllProducts() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const productCollection = await db.collection('products');
    return await productCollection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}