import {client} from "../index.js";

export async function insertMany(collection, array) {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collectionToUpd = await db.collection(collection);
    await collectionToUpd.insertMany(array);
    console.log("successfully added")
  } finally {
    await client.close();
  }
}