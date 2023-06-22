const response = require("../helpers/Response");
const serviceModel = require("../models/service.model");
const clientModel = require("../models/client.model");
const getRandomInt = require("../helpers/generateRandomInt");
const sendEmail = require("./email.controller");
const sendMessage = require("./message.controller");
const cliente = require("../bot");

const serviceCtrl = {};

serviceCtrl.create = async (req, reply) => {
  try {
    const { client, placa } = req.body;

    const foundClientById = await clientModel.findById(client);

    if (!foundClientById) {
      return response(
        reply,
        404,
        false,
        "",
        `The client doesn't exist in the database`
      );
    }

    const encontrarPlaca = foundClientById.vehicles.find(
      (item) => item === placa
    );

    if (!encontrarPlaca) {
      return response(reply, 404, false, "", `la placa no existe en tus datos`);
    }

    const newService = await serviceModel.create({
      ...req.body,
      client: foundClientById._id,
      order: getRandomInt(1000, 100000),
    });

    const emailOptions = {
      to: foundClientById.email,
      vehicle: placa,
      name: foundClientById.name,
      lastname: foundClientById.lastname,
      subject: `Servicio nuevo`,
      text: `Se ha creado correctamente el servicio para tu moto con la placa ${placa}`,
    };

    sendEmail(emailOptions);

    const messageOptions = {
      to: foundClientById.cellPhoneNum,
      text: `Gracias por siempre elegir nuestros servicios, ${foundClientById.name}😄.\n\Te notificamos que se ha creado correctamente el servicio de tu moto con la placa *${placa}*./n/Si deseas saber más información sobre tus servicios, ingresa a http://127.0.0.1:5173/status/${client}`,
    };

    sendMessage(messageOptions);

    return response(reply, 201, true, newService, "service created");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

serviceCtrl.listAll = async (req, reply) => {
  try {
    const services = await serviceModel.find().populate([
      {
        path: "client",
        select: { password: 0 },
      },
    ]);

    return response(reply, 200, true, services, "list of services");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

serviceCtrl.listOne = async (req, reply) => {
  try {
    const { id } = req.params;

    const service = await serviceModel.findById(id).populate([
      {
        path: "client",
        select: { password: 0 },
      },
    ]);

    if (!service) return response(reply, 404, false, "", "service not found");

    return response(reply, 200, true, service, "service found");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

serviceCtrl.listServiceByClient = async (req, reply) => {
  try {
    const { id } = req.params;

    const existClient = await clientModel.findById(id)

    const services = await serviceModel.find({client: id})

    if (!existClient) return response(reply, 404, false, "", `The client doesn't exist in the database`);

    return response(reply, 200, true, services, "client service list.");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

serviceCtrl.update = async (req, reply) => {
  try {
    const { id } = req.params;
    const { client, state } = req.body;

    const service = await serviceModel.findById(id);

    if (!service) return response(reply, 404, false, "", "service not found");

    const foundClientById = await clientModel.findById(client);

    if (!foundClientById)
      return response(
        reply,
        404,
        false,
        "",
        `The client doesn't exist in the database`
      );

    var changeState;

    if (state === "asignacionPendiente") {
      changeState = "asignación pendiente 📋";
    }

    if (state === "autorizacionPendiente") {
      changeState = "autorización pendiente 📋";
    }

    if (state === "repuestosPendientes") {
      changeState = "pendiente de repuestos ⚙️";
    }

    if (state === "trabajoExternoPendiente") {
      changeState = "pendiente de trabajos externos 📍";
    }

    if (state === "procesoReparacion") {
      changeState = "en proceso de reparación 🛠️";
    }

    if (state === "ok") {
      changeState = "lista para entrega 🤩🏍️";
    }

    const emailOptions = {
      to: foundClientById.email,
      vehicle: service.placa,
      name: foundClientById.name,
      lastname: foundClientById.lastname,
      subject: `Se ha actualizado el estado de tu servicio`,
      text: `El servicio de tu moto con la placa ${service.placa} está ${changeState}`,
    };

    sendEmail(emailOptions);

    const messageOptions = {
      to: foundClientById.cellPhoneNum,
      text: `¡Hola otra vez, ${foundClientById.name}!🤗\n\Te notificamos que el servicio de tu moto con la placa ${service.placa} ahora está ${changeState}./n/Si deseas saber más información sobre tus servicios, ingresa a http://127.0.0.1:5173/status/${client}`,
    };

    sendMessage(messageOptions);

    await service.updateOne({
      ...req.body,
      client: client,
    });

    return response(reply, 200, true, "", "updated service");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

serviceCtrl.delete = async (req, reply) => {
  try {
    const { id } = req.params;

    const service = await serviceModel.findById(id);

    if (!service) {
      return response(
        reply,
        404,
        false,
        "",
        "The service doesn't exist in the database"
      );
    }

    await service.deleteOne();
    return response(reply, 200, true, "", "service eliminado");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

module.exports = serviceCtrl;
