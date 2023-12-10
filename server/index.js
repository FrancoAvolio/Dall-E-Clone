import express, { urlencoded } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Ready"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
