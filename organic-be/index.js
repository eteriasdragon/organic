import express from 'express';
import cors from 'cors';
import swaggerUi from'swagger-ui-express';
import swaggerSpec from './swagger.js';
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';
import {
  aboutRouter,
  discountsRouter,
  newsRouter,
  ordersRouter,
  organicProsRouter,
  positionsRouter, productsRouter, reviewsRouter, statisticsRouter
} from "./routes/index.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const uri = `mongodb+srv://aethereal-dragon:QRNVUQeH0MhIQUFJ@cluster0.xlu38qm.mongodb.net/`;

app.use(cors());
app.use(express.json());
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/about', aboutRouter);
app.use('/discounts', discountsRouter);
app.use('/news', newsRouter);
app.use('/orders', ordersRouter);
app.use('/positions', positionsRouter);
app.use('/organic-pros', organicProsRouter);
app.use('/products', productsRouter);
app.use('/reviews', reviewsRouter);
app.use('/statistics', statisticsRouter);


export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
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

app.use(express.static('../organic-fe/dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../organic-fe/', 'dist', 'index.html'));
});

startServer()
