import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./model/productModel.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("this is home page");
  // console.log(process.env.MONGO_URL);
});

app.get("/d", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
app.get("/d/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});
app.listen(5000, console.log("connected"));
