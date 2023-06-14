const bcrypt = require('bcrypt')

module.exports = encryptPassword = (password) => {
  try {
    const salt = bcrypt.genSaltSync(15);
    const passwordEncriptada = bcrypt.hashSync(password, salt);

    return passwordEncriptada;
  } catch (error) {
    console.log("error en encryptPassword", error.message);
  }
};
