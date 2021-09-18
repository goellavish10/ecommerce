const jwt = require("jsonwebtoken");

const auth = {
  authorization: (req, res, next) => {
    const token = req.cookies.nToken;
    if (!token) {
      return res.json({ status: "error", error: "Not Authorized!" });
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      console.log(data);
      req.user = data._id;
      return next();
    } catch (err) {
      console.log(err);
      return res.sendStatus(403);
    }
  },
};

module.exports = auth;
