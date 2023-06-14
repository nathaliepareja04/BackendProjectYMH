const qrcode = require("qrcode-terminal");
const {Client, LocalAuth} = require("whatsapp-web.js");

const cliente = new Client({
    authStrategy : new LocalAuth()
})
cliente.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

cliente.on('ready', async () => {
     console.log("El cliente está listo!")
})

cliente.initialize();

module.exports = cliente
