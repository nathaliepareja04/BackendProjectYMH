const jwt = require("jsonwebtoken");
const response = require("../helpers/Response");
const clientModel = require("../models/client.model");

const messageNoAuth = (reply) => {
  return response(reply, 401, false, "", "no estas autorizado");
};

module.exports = verifyToken = async (req, reply, done) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET, async (err, payload) => {
      if (err) {
        return messageNoAuth(reply);
      }

      const user = await clientModel.findById({ _id: payload.user });

      if (!user) {
        return messageNoAuth(reply);
      }

      req.userId = payload.user;
      done();
    });
  }

  if (!token) {
    return messageNoAuth(reply);
  }
};