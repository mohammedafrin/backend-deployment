import express from "express";
import cors from "cors"
import dbConnection from "./dbConnection.js";
import dotenv from "dotenv"
import { errorMiddleWare } from "./error.js";
import reservationRouter from "./routes/reservatioon.js"
const app=express();
dotenv.config({
    path:"./config/config.env"
})
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
})
)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation",reservationRouter)

dbConnection();
app.use(errorMiddleWare)

export default app;