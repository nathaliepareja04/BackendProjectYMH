const serviceCtrl = require ("../controllers/service.controller");
const verifyToken = require ("../middlewares/auth");
const validService = require ("../validSchema/validService");

const middleware = (req, reply, done) => {
  verifyToken(req, reply, done);
};

module.exports = serviceRoutes = (fastify, opts, done) => {
  fastify.get(
    "/",
    {preHandler:[middleware]},
    serviceCtrl.listAll
  );
  fastify.get(
    "/:id",
    {preHandler:[middleware]},
    serviceCtrl.listOne
  );

  fastify.post(
    "/",
    {
      schema: validService,
    },
    serviceCtrl.create
  );
  fastify.put(
    "/:id",
    serviceCtrl.update
  );
  fastify.delete(
    "/:id",
    {preHandler:[middleware]},
    serviceCtrl.delete
  );

  done();
};