import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import swaggerUi from'swagger-ui-express';
import swaggerSpec from './swagger.js';
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from 'mongodb';
import {getAllProducts} from "./helpers/products/getAllProducts.js";
import Product from "./models/product.js";

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

