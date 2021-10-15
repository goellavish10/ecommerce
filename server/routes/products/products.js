const express = require("express");
const router = express.Router();
const { cloudinary } = require("../../utils/cloudinary");

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

// ADD PRODUCT
router.post("/add-product", async (req, res) => {
  const { img, price, cat } = req.body;
  try {
    const uploadResponse = await cloudinary.uploader.upload(img, {
      upload_preset: "ecommerce_app",
      tags: cat,
    });
    const imgName = uploadResponse.public_id.split("ecommerce/")[1];
    const product = new Product({
      img: imgName,
      price,
      cat,
    });

    product.save().then((res) => console.log(res));

    res.json({ status: "ok", msg: "Product Added Succesfully" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Something went Wrong!" });
  }
});

module.exports = router;
