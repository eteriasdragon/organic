import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import swaggerUi from'swagger-ui-express';
import swaggerSpec from './swagger.js';
import products from  "./mock/products.js";
import mongoose from "mongoose";

const app = express();
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

app.get('/products', function(req, res) {
  res.send(products);
});


async function startServer() {
  try {
    await mongoose.connect(`mongodb+srv://aethereal-dragon:QRNVUQeH0MhIQUFJ@cluster0.xlu38qm.mongodb.net/`);
    app.listen(3001,()=> {console.log('server was started!');})
  }
  catch (e) {
    console.log(e);
  }
}

startServer()