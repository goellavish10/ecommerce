const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const token = req.cookies.nToken;
  if (!token) {
    return res.json({ status: "error", error: "Not Authorized!" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(data);
    req.user = data;
    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

const isAdminAuthorization = (req, res, next) => {
  authorization(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.json({
        status: "error",
        error: "You are not authorized to access",
      });
    }
  });
};

module.exports = { authorization, isAdminAuthorization };
