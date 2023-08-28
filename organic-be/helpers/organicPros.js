import {client} from "../index.js";

export async function getOrganicPros() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collection = await db.collection('organicPros');
    return await collection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}