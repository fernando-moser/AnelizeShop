import express from "express";
import products from "./products.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.contentType = "application/json";
    res.status(404).send({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
