const schemaEnv = {
  type: "object",
  required: ["PORT", "HOST", "MONGO_URI",
   "SECRET", "USER", "PASS" ],
  properties: {
    PORT: {
      type: "number",
    },
    HOST: {
      type: "string",
    },
    MONGO_URI: {
      type: "string",
    },
    SECRET: {
      type: "string",
    },
    USER: {
      type: "string",
    },
    PASS: {
      type: "string",
    },
  },
};

module.exports = optionsEnv = {
  schema: schemaEnv,
  dotenv: true,
};
