import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";

import taskRoute from "./routes/taskRoute.js";

const app = express();
configDotenv();
const port = process.env.PORT || 5010;
app.use(express.json());
app.use(cors());

app.use("/api/task", taskRoute);

const listen = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

listen();
