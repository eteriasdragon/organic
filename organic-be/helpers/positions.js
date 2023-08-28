import {client} from "../index.js";

export async function getPositions() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collection = await db.collection('positions');
    return await collection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}