require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoute = require("./routes/users/user");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    console.log("MongoDB connected");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.listen(3000, () => console.log("Server is running on PORT 3000"));
