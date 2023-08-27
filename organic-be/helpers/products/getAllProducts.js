import {client} from "../../index.js";

export async function insertMany(collection, array) {
  try {
    await client.connect();
    const db = await client.db('storedb');
    const collectionToUpd = await db.collection('collection');
    await collectionToUpd.insertMany(array);
  } finally {
    await client.close();
  }
}

export async function getAllProducts() {
  // try {
  //   await client.connect();
  //   const db = await client.db('storedb');
  //   const productCollection = await db.collection('products');
  //   await productCollection.insertMany(products)
  // } finally {
  //   await client.close();
  // }
  try {
    await client.connect();
    const db = await client.db('storedb');
    const productCollection = await db.collection('products');
    return await productCollection.find({}).toArray()
  } finally {
    await client.close();
  }
}