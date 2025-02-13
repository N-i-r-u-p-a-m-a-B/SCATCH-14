const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.EXPRESS_SESSION_SECRET, {
    expiresIn: '1h',
  });
};

module.exports = generateToken;
