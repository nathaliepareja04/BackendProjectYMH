const response = (reply, statusCode, ok, data, message) => {
  reply.code(statusCode).send({
    ok,
    data,
    message,
  });
};

module.exports = response
