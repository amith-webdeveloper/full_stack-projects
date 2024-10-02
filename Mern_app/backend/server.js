import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import ProductRoutes from './routes/product.route.js'
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/products' , ProductRoutes)



// server listen ===============================================
app.listen(3000, function () {
  connectDB();
  console.log("server started at 3000");
});

// amith_mern01
