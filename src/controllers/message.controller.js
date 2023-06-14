const cliente = require("../bot");
const response = require("../helpers/Response");

const sendMessage = async (messageOptions, req, reply) => {
  try {
    const { to, text } = messageOptions;
    const number = `57${to}@c.us`

    if (messageOptions === undefined) {
      console.log("No hay datos por enviar...");
    } else {
      cliente.sendMessage(number, text);

      // OK
      console.log("El mensaje ha sido enviado con éxito");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMessage;
