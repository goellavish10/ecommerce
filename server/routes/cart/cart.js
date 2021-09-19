const express = require("express");
const router = express.Router();
const Cart = require("../../Models/Cart");

const { authorization } = require("../auth/auth");

// ADD ITEMS TO THE CART
router.post("/update-cart", authorization, async (req, res) => {
  const { productId, quantity, name, price } = req.body;

  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // cart exisits for user
      // check if the product added already exists
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        // product already exists in the cart
        // update the quantity, price etc
        let productItem = cart.products[itemIndex];
        productItem.quantity += quantity;
        productItem.totalAmount = productItem.price * productItem.quantity;
        cart.products[itemIndex] = productItem;
      } else {
        // product does not exist
        cart.products.push({
          productId,
          quantity,
          name,
          price,
          totalAmount: quantity * price,
        });
      }
      const filteredProducts = cart.products.filter((el, index, arr) => {
        return el.quantity > 0;
      });
      cart.products = filteredProducts;
      cart = await cart.save();
      return res.json({ status: "ok", cart });
    } else {
      // cart does not exist
      const newCart = new Cart({
        userId,
        products: [
          { productId, quantity, name, price, totalAmount: quantity * price },
        ],
      });
      try {
        await newCart.save();
        res.json({ status: "ok", newCart });
      } catch (err) {
        console.log(err);
        res.json({ status: "error", err });
      }
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: err });
  }
});

module.exports = router;
