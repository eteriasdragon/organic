import {client} from "../index.js";

export async function getNews() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const newsCollection = await db.collection('news');
    return await newsCollection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}