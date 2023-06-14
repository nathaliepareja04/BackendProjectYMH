const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const emailSchema = new Schema(
  {
    vehicle: {
        type: String,
        required: [true, "The 'vehicle' field is required."],
    },
    email: {
        type: String,
        required: [true, "The 'email' field is required."],
    },
    name: {
        type: String,
        required: [true, "The 'name' field is required."],
    },
    lastname: {
        type: String,
        required: [true, "The 'lastname' field is required."],
    },
    subject: {
        type: String,
        required: [true, "The 'subject' field is required."],
    },
    text: {
        type: String,
        required: [true, "The 'text' field is required."],
    }
  },
  { timestamps: true }
);

module.exports = emailModel = model("email", emailSchema);
