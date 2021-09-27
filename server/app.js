require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/users/user");
const cartRoute = require("./routes/cart/cart");

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) return console.log(err);
  console.log("MongoDB connected");
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", userRoute);
app.use("/api/cart", cartRoute);

app.listen(5000, () => console.log("Server is running on PORT 5000"));
