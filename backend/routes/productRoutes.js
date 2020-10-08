import express from "express";

const router = express.Router();
import { getProduct, getProducts } from "../controllers/productController.js";

router.get("/", getProducts);

router.get("/:pid", getProduct);

export default router;
