import {client} from "../index.js";

export async function getDiscounts() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collection = await db.collection('discounts');
    return await collection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}