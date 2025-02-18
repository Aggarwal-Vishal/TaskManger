import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/routes.js";
import taskRoute from "./routes/task.route.js";

dotenv.config({});

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Working");
});

//API's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/task", taskRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
