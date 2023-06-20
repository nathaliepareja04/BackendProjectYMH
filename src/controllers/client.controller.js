const response = require("../helpers/Response");
const clientModel = require("../models/client.model");
const comparePassword = require("../helpers/consts/comparePassword");
const encryptPassword = require("../helpers/encryptPassword");
const sendEmail = require("./email.controller");
const sendMessage = require("./message.controller");
const cliente = require("../bot");

const clientCtrl = {};

// Método para crear un nuevo cliente
clientCtrl.create = async (req, reply) => {
  try {
    const { email, docNum, cellPhoneNum,password } = req.body;

    const [foundEmail, foundDocNum, foundCellNum] =
    await Promise.all([
      clientModel.findOne({email}),
      clientModel.findOne({docNum}),
      clientModel.findOne({cellPhoneNum}),
    ]);

    if(foundEmail){
      return response(
        reply,
        404,
        false,
        "",
        `el email ya existe en la base de datos`
      );
    } else if(foundDocNum){
      return response(
        reply,
        404,
        false,
        "",
        `el numero de documento ya existe en la base de datos`
      );
    } else if(foundCellNum){
      return response(
        reply,
        404,
        false,
        "",
        `el numero celular ya existe en la base de datos`
      );
    }

    const passwordEncrypt= encryptPassword(password)

    const newClient = await clientModel.create({
      ...req.body,
      password: passwordEncrypt
    });

    const emailOptions={
      to: newClient.email,
      vehicle: "",
      name: newClient.name,
      lastname: newClient.lastname,
      subject: `BIENVENID@ ${newClient.name}`,
      text: "Tu cuenta se ha creado exitosamente" 
    }

    sendEmail(emailOptions)

    const messageOptions = {
      to: newClient.cellPhoneNum,
      text: [`¡Gracias por elegirnos ${newClient.name}!`,'Te notificamos que se ha creado exitosamente tu cuenta']
    }

    await sendMessage(messageOptions)

    cliente.initialize();

    return response(
      reply,
      201,
      true,
      {
        ...newClient.toJSON(),
        password: null,
      },
      "The client has been created successfully."
    );
  } catch (error) {
    return response(
      reply,
      500,
      false,
      "",
      `An error has occurred in the 'create' function ${error.message}`
    );
  }
};

// Método para listar todos los clientes
clientCtrl.listAll = async (req, reply) => {
  try {
    const clients = await clientModel
      .find()
      .select({ password: 0 });

    return response(reply, 200, true, clients, "List of registered clients. ");
  } catch (error) {
    return response(
      reply,
      500,
      false,
      "",
      `An error has occurred in the 'listAll' function ${error.message}`
    );
  }
};

// Método para listar un cliente por su 'id'
clientCtrl.listOne = async (req, reply) => {
  try {
    const { id } = req.params;

    const client = await clientModel.findById(id).select({ password: 0 });

    if (!client)
      return response(
        reply,
        404,
        false,
        "",
        "The client doesn't exist in the database"
      );

    return response(
      reply,
      200,
      true,
      client,
      "The client has been found successfully"
    );
  } catch (error) {
    return response(
      reply,
      500,
      false,
      "",
      `An error has occurred in the 'listOne' function ${error.message}`
    );
  }
};

// Método para actualizar un cliente por su 'id'
clientCtrl.update = async (req, reply) => {
  try {
    const { id } = req.params;

    const client = await clientModel.findById(id);

    if (!client){
      return response(
        reply,
        404,
        false,
        "",
        "The client doesn't exist in the database"
      );
    }

    const { email, docNum, cellPhoneNum, password,placa } = req.body;

    const [foundEmail, foundDocNum, foundCellNum, foundVehicle] =
    await Promise.all([
      clientModel.findOne({email}),
      clientModel.findOne({docNum}),
      clientModel.findOne({cellPhoneNum}),
      clientModel.findOne({placa}),
    ]);

    if(foundEmail){
      return response(
        reply,
        404,
        false,
        "",
        `el email ya existe`
      );
    } else if(foundDocNum){
      return response(
        reply,
        404,
        false,
        "",
        `el docNum ya existe`
      );
    } else if(foundCellNum){
      return response(
        reply,
        404,
        false,
        "",
        `el cellPhoneNum ya existe`
      );
    } else if(foundVehicle){
      return response(
        reply,
        404,
        false,
        "",
        `el foundVehicle ya existe`
      );

    }

    const addVehicle = client.vehicles.push({placa})

    if(addVehicle){

      const emailOptions={
        to: client.email,
        vehicle: placa,
        name: client.name,
        lastname: client.lastname,
        subject: `Moto agregada`,
        text: `Se ha agregado correctamente tu moto con la placa ${placa}`
      }
  
      return sendEmail(emailOptions)
    }

    if (password) {
      return await comparePassword(req, reply, password, client);
    }

    const passwordEncrypt= encryptPassword(password)

    await client.updateOne({
      ...req.body,
      password: passwordEncrypt
    });

    const emailOptions={
      to: client.email,
      vehicle: "",
      name: client.name,
      lastname: client.lastname,
      subject: `Actualización de datos`,
      text: "Se han actualizado correctamente tus datos" 
    }

    sendEmail(emailOptions)

    return response(
      reply,
      200,
      true,
      "",
      "The client has been successfully updated. "
    );
  } catch (error) {
    return response(
      reply,
      500,
      false,
      "",
      `An error has occurred in the 'update' function ${error.message}`
    );
  }
};

clientCtrl.delete = async (req, reply) => {
  try {
    const { id } = req.params;

    const client = await clientModel.findById(id);

    if (!client) {
      return response(
        reply,
         404, 
         false, 
         "", "The client doesn't exist in the database");
    }

    await client.deleteOne();
    return response(reply, 200, true, "", "cliente eliminado");
  } catch (error) {
    return response(reply, 500, false, "", error.message);
  }
};

module.exports = clientCtrl;
