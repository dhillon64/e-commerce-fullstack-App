import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

const app = express();

app.get("/api/products", (req, res, next) => {
  res.json(products);
});

app.get("/api/products/:pid", (req, res, next) => {
  const id = req.params.pid;
  const product = products.find((product) => product._id === id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
