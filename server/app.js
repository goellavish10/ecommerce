require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/users/user");
// const authRoute = require("./routes/users/user");

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) return console.log(err);
  console.log("MongoDB connected");
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
