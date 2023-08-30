import {client} from "../index.js";

export async function getAllOrders() {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const ordersCollection = await db.collection('orders');
    return await ordersCollection.find({}).toArray()
  } catch(e) {
    console.log(e);
  }
}

export async function addNewOrder(orderData) {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collectionToUpd = await db.collection('orders');
    await collectionToUpd.insertOne(orderData);
    console.log("order successfully added")
  } catch (e) {
    console.log(e);
  }
}