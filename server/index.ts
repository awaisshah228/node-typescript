import "dotenv/config";
import express from "express";
import cors from "cors";
import { mongoConnect } from "./utils/mongo";


const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(3001, async () => {
  await mongoConnect();
  console.log("connected");
});