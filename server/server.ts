const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const productRouter = require("./routes/product");
const stripeRouter = require("./routes/stripe");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED"))
  .catch((e: any) => console.error(e));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/checkout", stripeRouter);

app.listen(process.env.PORT || 5001, () => {
  console.log("Server is running");
});
