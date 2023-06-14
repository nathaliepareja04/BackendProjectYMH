const clientCtrl = require ("../controllers/client.controller");
const verifyToken = require ("../middlewares/auth");
const validClient = require ("../validSchema/validClient");

const middleware = (req, reply, done) => {
  verifyToken(req, reply, done);
};

const clientRoutes = (fastify, opts, done) => {
  fastify.get(
    "/",{preHandler:[middleware]},
    clientCtrl.listAll
  );
  fastify.get(
    "/:id",{preHandler:[middleware]},
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
    {preHandler:[middleware]},
    clientCtrl.update
  );
  fastify.delete(
    "/:id",
    {preHandler:[middleware]},
    clientCtrl.delete
  );

  done();
};

module.exports = clientRoutes