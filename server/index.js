import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'

dotenv.config();
const port = process.env.PORT || 5000;

const corsOption = {
    origin: ['http://localhost:5173'],
};


connectDB();

const app = express();

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoutes);

app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})