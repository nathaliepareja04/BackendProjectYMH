const authCtrl = require ("../controllers/auth.controller");

module.exports = authRoutes = (fastify, opts, done) => {
  fastify.post("/login", authCtrl.login);
  done();
};
