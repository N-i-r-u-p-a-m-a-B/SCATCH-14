const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    return res.redirect("/");
  }

  try {
    let decoded = jwt.verify(req.cookies.token, process.env.EXPRESS_SESSION_SECRET);
    let user = await userModel.findOne({ _id: decoded.id }).select("-password");
    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "Something went wrong");
    res.redirect("/");
  }
};
