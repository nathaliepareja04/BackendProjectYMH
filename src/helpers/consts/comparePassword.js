const bcrypt = require("bcrypt");
const encryptPassword = require("../encryptPassword");
const response = require("../Response");

module.exports = comparePassword = async (req, reply, password, client) => {
  const samePassword = bcrypt.compareSync(password, client.password);

  if (!samePassword) {
    await client.updateOne({
      ...req.body,
      password: encryptPassword(password),
    });
    return response(
      reply,
      200,
      true,
      "",
      "The user has been successfully updated. "
    );
  }

  return response(
    reply,
    400,
    false,
    "",
    "la contraseña que ingresaste es igual a la anterior"
  );
};
