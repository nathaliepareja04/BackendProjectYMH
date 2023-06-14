const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const serviceSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: [true, "The 'client' field is required"],
    },
    typeService: {
      type: String,
      enum: ["garantias", "reparacionGeneral", "diagnostico","negociosEspeciales","revisiones", "retorno"],
      required: [true, "The 'typeService' field is required"],
    },
    placa: {
      type: String,
      required: [true, "The 'placa' field is required"],
    },
    duration: {
      type: String,
      required: [true, "The 'duration' field is required"],
    },
    order: {
      type: String,
      unique:true,
      required: [true, "The 'order' field is required"],
    },
    campus: {
      type: String,
      required: [true, "The 'campus' field is required"],
    },
    startTime: {
      type: Date,
      default: Date.now(),
    },
    endTime: {
      type: Date,
      required: [true, "The 'endTime' field is required"],
    },
    state: {
      type: String,
      enum: ["ok", "asignacionPendiente", "autorizacionPendiente","repuestosPendientes","trabajoExternoPendiente", "procesoReparacion"],
      default: "asignacionPendiente",
    },
  },
  { timestamps: true }
);


module.exports = serviceModel = model("service", serviceSchema);
