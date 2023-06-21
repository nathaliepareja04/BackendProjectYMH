module.exports = validService = {
  body: {
    type: "object",
    required: ["typeService", "client", "duration",
    "campus","endTime", "placa"],
    properties: {
      typeService: {
        type: "string",
      },
      client: {
        type: "string",
      },
      placa: {
        type: "string",
      },
      order: {
        type: "string",
      },
      duration: {
        type: "string",
      },
      campus: {
        type: "string",
      },
      startTime: {
        type: "string",
        format: "date",
      },
      endTime: {
        type: "string",
        format: "date",
      },
      state: {
        type: "string",
      },
    },
  },
};
