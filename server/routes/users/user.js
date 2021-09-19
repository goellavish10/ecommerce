const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../Models/User");

const jwt = require("jsonwebtoken");
const { authorization, isAdminAuthorization } = require("../auth/auth");

// REGISTER USER
router.post("/register", async (req, res) => {
  const { name, email, password: plainTextPassword } = req.body;
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (name.trim() === "" && plainTextPassword.trim() === "") {
    return res.json({
      status: "error",
      error: "Please enter a valid name and password",
    });
  }
  if (!emailRegexp.test(email)) {
    return res.json({
      status: "error",
      error: "Please enter a valid email address",
    });
  }

  // Hash Password
  const password = await bcrypt.hash(plainTextPassword, 10);

  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    const savedUser = await newUser.save();
    const token = jwt.sign(
      { _id: savedUser._id, isAdmin: savedUser.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("nToken", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json({ status: "ok", savedUser });
  } catch (err) {
    if (err.code === 11000) {
      console.log(err);
      return res.json({
        status: "error",
        error: "Email already in use please login",
      });
    }
  }
});

// LOGIN USER
router.post("/login", async (req, res) => {
  const { email, password: plainTextPassword } = req.body;
  if (!email && !plainTextPassword) {
    return res.json({
      status: "error",
      error: "Please enter a valid name and password",
    });
  }

  if (email.trim() === "" && plainTextPassword.trim() === "") {
    return res.json({
      status: "error",
      error: "Please enter a valid name and password",
    });
  }

  try {
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.json({ status: "error", error: "User not found!" });
    }

    if (await bcrypt.compare(plainTextPassword, user.password)) {
      const token = jwt.sign(
        { _id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return res
        .cookie("nToken", token, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({ status: "ok", message: "succesfully logged in!" });
    } else {
      return res.json({ status: "error", error: "Wrong Username or password" });
    }
  } catch (err) {
    console.log(err);
  }
});

// LOGOUT USER
router.get("/logout", (req, res) => {
  res.clearCookie("nToken");
  return res.json({ status: "ok", message: "Successfully logged out!" });
});

// Update Password
router.put("/:id", authorization, async (req, res) => {
  const _id = req.params.id;
  const { oldPassword, newPassword: plainTextPassword } = req.body;

  if (oldPassword === plainTextPassword) {
    return res.json({
      status: "error",
      error: "New password cannot be same!",
    });
  }

  // console.log(oldPassword, plainTextPassword);

  const user = await User.findOne({ _id });
  if (!user) return res.json({ status: "error", error: "User not found!" });

  if (await bcrypt.compare(oldPassword, user.password)) {
    try {
      const password = await bcrypt.hash(plainTextPassword, 10);
      const updatedUser = await User.findByIdAndUpdate(
        { _id },
        {
          $set: {
            password: password,
          },
        },
        { new: true }
      );
      res.json({
        status: "ok",
        message: "Password updated Succesfully",
        user: updatedUser,
      });
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: "something went wrong!" });
    }
  } else {
    return res.json({
      status: "error",
      error: "Please enter correct existing password",
    });
  }
});

router.get("/protected", isAdminAuthorization, (req, res) => {
  return res.json({ user: req.user });
});

module.exports = router;
