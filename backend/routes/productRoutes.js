import express from "express";

const router = express.Router();
import {
  getProduct,
  getProducts,
  getTopProducts,
} from "../controllers/productController.js";

router.get("/", getProducts);

router.get("/:pid", getProduct);

router.get("/top/products", getTopProducts);

export default router;
