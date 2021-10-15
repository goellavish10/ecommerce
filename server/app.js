require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/users/user");
const cartRoute = require("./routes/cart/cart");
const productRoute = require("./routes/products/products");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  },
  (err) => {
    if (err) return console.log(err);
    console.log("MongoDB connected");
  }
);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin:
      "https://ecommerce-fullstack.netlify.app" || "http://localhost:3000",
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

app.get("*", (req, res) => {
  res.send("APP WORKS!");
});
app.use("/api/users", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/products", productRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
