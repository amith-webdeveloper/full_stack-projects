import express from "express";

import { createProduct, DeleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";



const router = express.Router()

// get all products ===================================================
router.get("/", getProducts);
// create products ================================================
 router.post("/", createProduct); 
// delete products   ===================================================
router.delete("/:id", DeleteProduct);
// update products =================================================
router.put("/:id", updateProduct);

export default router