import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute.js";


mongoose
  .connect(process.env.MONGODB as string)
  .then(() => console.log("database connected"))

const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/test", async(req: Request, res: Response)=> {
     res.json({message: "Hi"})
})

app.use("/api/my/user", myUserRoute);

app.listen(7000, ()=> {
    console.log("sever started on localhost: 7000")
})