import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./model/productModel.js";
import User from "./model/userModel.js";
import users from "./data/users.js";
import products from "./data/products.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    User.deleteMany();
    Product.deleteMany();

    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("data is imported");
    process.exit(1)
  } catch (error) {
    console.log(error);
  }
};
importData();
