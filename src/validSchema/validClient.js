module.exports = validClient = {
  body: {
    type: "object",
    required: [
      "name",
      "lastname",
      "email",
      "docType",
      "docNum",
      "password",
      "cellPhoneNum",
    ],
    properties: {

      name: {
        type: "string",
        minLength: 3,
      },
      lastname: {
        type: "string",
        minLength: 4,
      },
      email: {
        type: "string",
      },
      docType: {
        type: "string",
        enum: ["CC", "PEP", "CE"],
      },
      docNum: {
        type: "string",
      },
      password: {
        type: "string",
      },
      cellPhoneNum: {
        type: "string",
        minLength: 10,
        maxLength: 10,     
      },    
      vehicles: {
        type: "array",
        items: { type: 'string' }
      },
    },
  },
};
