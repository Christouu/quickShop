const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRouter = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED"))
  .catch((e: any) => console.error(e));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});