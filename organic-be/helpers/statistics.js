import {client} from "../index.js";

export async function getStatistics() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collection = await db.collection('statistic');
    return await collection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}