import express from "express";
import cors from "cors";
const app = express();
import { connectDb } from "./Config/db.js";
import foodRouter from "./Routes/foodRoute.js";

app.use(cors());
app.use(express.json());
connectDb();
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
const port = 3000;

app.get("/", (req, res) => res.send("API working"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
