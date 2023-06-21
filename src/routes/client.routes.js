const clientCtrl = require ("../controllers/client.controller");
const verifyToken = require ("../middlewares/auth");
const validClient = require ("../validSchema/validClient");

const middleware = (req, reply, done) => {
  verifyToken(req, reply, done);
};

const clientRoutes = (fastify, opts, done) => {
  fastify.get(
    "/",
    clientCtrl.listAll
  );
  fastify.get(
    "/:id",
    clientCtrl.listOne
  );
  fastify.post(
    "/",
    {
      schema: validClient,
    },
    clientCtrl.create
  );
  fastify.put(
    "/:id",
    clientCtrl.update
  );
  fastify.delete(
    "/:id",
    clientCtrl.delete
  );

  done();
};

module.exports = clientRoutes