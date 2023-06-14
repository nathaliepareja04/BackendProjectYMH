const jwt = require("jsonwebtoken");

module.exports = generateToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "30d",
    });
    return token;
  } catch (error) {
    console.log("error en generateToken", error.message);
  }
};
