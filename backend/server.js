import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'
dotenv.config();
connectDB();

const app = express();

app.use((req) =>{
 console.log('d') 
 req.next()
})
 
app.get("/", (req, res) => {
  res.send("this is home page");
  // console.log(process.env.MONGO_URL);
});
 
app.use('/api/product',productRoutes)


app.listen(5001, console.log("connected"));
