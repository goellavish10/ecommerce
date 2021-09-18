const express = require("express");
const router = express.Router();

router.get("/usertest", (req, res) => {
  console.log("endpoint succesful");
});

module.exports = router;
