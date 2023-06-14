module.exports = validEmail = {
  body: {
    type: "object",
    required: ["vehicle", "email", "name", "lastname", "subject", "text"],
    properties: {
      vehicle: {
        type: "string",
      },
      name: {
        type: "string",
      },
      lastname: {
        type: "string",
      },
      email: {
        type: "string",
      },
      subject: {
        type: "string",
      },
      text: {
        type: "string",
      },
    },
  },
};
