const express = require("express");
const router = express.Router();

const Product = require("../../Models/Product");

router.get("/", async (req, res) => {
  const query = req.query.cat;
  try {
    const productsArr = await Product.find({ cat: `${query}` });

    if (productsArr) return res.json({ status: "ok", data: productsArr });

    res.json({ status: "error", error: "Invalid category entered!" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Something went wrong" });
  }
});

module.exports = router;
