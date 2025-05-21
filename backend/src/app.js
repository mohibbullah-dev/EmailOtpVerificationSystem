import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes starts from here
import userRoute from "./routes/user.route.js";
app.use("/api/v1/users", userRoute);

export default app;
