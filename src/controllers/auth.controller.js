const response = require("../helpers/Response");
const generateToken = require("../helpers/generateToken");
const clientModel = require("../models/client.model");

const authCtrl = {};

authCtrl.login = async (req, reply) => {
  try {
    const { docNum, password } = req.body;

    const client = await clientModel.findOne({ docNum });

    if(!client){
      return response(reply,404,false,req.body,"el cliente no existe en la base de datos")
    }

    if (client && client.matchPassword(password)) {
      const token = generateToken({ client: client._id });
      return response(
        reply,
        200,
        true,
        { ...client.toJSON(), 
          password: null,
          token },
        `Welcome ${client.name}`
      );
    }

    return response(reply, 400, false, "", "docNum o password incorrectos");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

module.exports = authCtrl;
