import express from "express";
import asyncHandler from "express-async-handler";
import HttpError from "../middleware/http.error.js";
const router = express.Router();
import Product from "../models/productModel.js";

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const products = await Product.find({});

    res.json(products);
  })
);

router.get(
  "/:pid",
  asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.pid);

    if (product) {
      res.json(product);
    } else {
      return next(new HttpError("product not found", 404));
    }
  })
);

export default router;
