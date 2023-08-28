import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import swaggerUi from'swagger-ui-express';
import swaggerSpec from './swagger.js';
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';
import {getAllProducts} from "./helpers/products/getAllProducts.js";
import {getNews} from "./helpers/news.js";
import {getAboutList} from "./helpers/about.js";
import {getReviews} from "./helpers/reviews.js";
import {getStatistics} from "./helpers/statistics.js";
import {getDiscounts} from "./helpers/discounts.js";
import {getOrganicPros} from "./helpers/organicPros.js";
import {getPositions} from "./helpers/positions.js";

const app = express();
const uri = `mongodb+srv://aethereal-dragon:QRNVUQeH0MhIQUFJ@cluster0.xlu38qm.mongodb.net/`;

app.use(cors());
app.use(express.json());

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use(function(req,res, next) {
//     if (req.path === '/login' || req.path === '/api') {
//         next();
//     } else {
//         verifyToken(req, res, next)
//     }
// })

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/products', async function(req, res) {
  const allProducts = await getAllProducts();
  res.send(allProducts);
});

app.get('/news', async function(req, res) {
  const news = await getNews();
  res.send(news);
});

app.get('/about', async function(req, res) {
  const aboutList = await getAboutList();
  res.send(aboutList);
});

app.get('/reviews', async function(req, res) {
  const reviewsList = await getReviews();
  res.send(reviewsList);
});

app.get('/statistics', async function(req, res) {
  const stateList = await getStatistics();
  res.send(stateList);
});

app.get('/discounts', async function(req, res) {
  const discountsList = await getDiscounts();
  res.send(discountsList);
});

app.get('/organic-pros', async function(req, res) {
  const organicProsList = await getOrganicPros();
  res.send(organicProsList);
});

app.get('/positions', async function(req, res) {
  const positionsList = await getPositions();
  res.send(positionsList);
});

async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected")
    app.listen(3001,()=> {console.log('server was started!');})
  }
  catch (e) {
    console.log(e);
  }
}

startServer()


// async function insertMany(collection, array) {
//   try {
//     await client.connect();
//     const db = await client.db('storedb');
//     const collectionToUpd = await db.collection(collection);
//     await collectionToUpd.insertMany(array);
//     console.log("successfully added")
//   } finally {
//     await client.close();
//   }
// }
//
// const news = [
//   {
//     id: 0,
//     date: "25 Nov",
//     author: "Rachi Card",
//     title: "The Benefits of Vitamin D & How to Get It",
//     text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
//     backgroundUrl: "https://i.ibb.co/C2xFzyp/vitamins.png"
//   },
//   {
//     id: 1,
//     date: "25 Nov",
//     author: "Rachi Card",
//     title: "Our Favourite Summertime Tommeto",
//     text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
//     backgroundUrl: "https://i.ibb.co/9GzqyHB/tommeto.png"
//   },
// ];
//
//
// // insertMany("news", news)
