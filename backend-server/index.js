import express from "express";
import "./config/db.js";
import cors from "cors";
import { protect } from "./middleware/authMiddleware.js";

import userRoute from "./routes/userRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello to DelpDesk");
});

app.get("/protected", protect, (req, res) => {
  // res.send("Protected", { user: req.user})

  res.status(200).json({ message: "Protected", user: req.user });
});

app.use("/auth", userRoute);

app.listen(PORT, () => {
  console.log(`Server Running on: http://localhost:${PORT} `);
});
