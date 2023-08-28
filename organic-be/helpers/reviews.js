import {client} from "../index.js";

export async function getReviews() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collection = await db.collection('reviews');
    return await collection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}