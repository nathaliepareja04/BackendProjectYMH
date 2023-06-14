const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { Schema, model } = mongoose;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The 'name' field is required."],
    },
    lastname: {
      type: String,
      required: [true, "The 'lastname' field is required."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "The 'email' field is required."],
    },
    docType: {
      type: String,
      enum: ["CC", "PEP", "CE"],
      required: [true, "The 'docType' field is required."],
    },
    docNum: {
      type: String,
      unique: true,
      required: [true, "The 'docNum' field is required."],
    },
    password: {
      type: String,
      required: [true, "The 'password' field is required."],
    },
    cellPhoneNum: {
      type: String,
      unique: true,
      required: [true, "The 'cellPhoneNum' field is required."],
    },
    vehicles: [
      {
        type: String,
        required: [true, "El auto es obligatorio"],
        default: []
      },
    ],
  },
  { timestamps: true }
);

clientSchema.methods.matchPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = clientModel = model("client", clientSchema);
