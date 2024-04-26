import {client} from "../index.js";

export async function getrabet() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collection = await db.collection('4rabet');
    return await collection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}