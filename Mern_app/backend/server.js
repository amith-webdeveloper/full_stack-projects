import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import ProductRoutes from './routes/product.route.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());

app.use('/api/products' , ProductRoutes)



// server listen ===============================================
app.listen(port, function () {
  connectDB();
  console.log(`server started at ${port}`);
});

// amith_mern01
