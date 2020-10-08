import asyncHandler from "express-async-handler";
import HttpError from "../middleware/http.error.js";
import Product from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});

  res.json(products);
});

export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.pid);

  if (product) {
    res.json(product);
  } else {
    return next(new HttpError("product not found", 404));
  }
});
