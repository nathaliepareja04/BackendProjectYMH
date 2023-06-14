// Importación de paquetes
const Fastify = require ("fastify");
const fastifyEnv = require ("@fastify/env");
const cors = require ("@fastify/cors");
const formBody = require ("@fastify/formbody");
const multer = require ("fastify-multer");

// Importación de las variables de entorno
const optionsEnv = require ("./src/configEnv");

// Importación de conexión a la base de datos
const connectDb = require ("./src/database");

// Importación de las rutas
const clientRoutes = require ("./src/routes/client.routes");
const serviceRoutes = require ("./src/routes/service.routes");
const authRoutes = require ("./src/routes/auth.routes");
const emailRoutes = require ("./src/routes/email.routes");

// Importación del bot
const client = require("./src/bot");

// Creación del servidor en Fastify
const fastify = Fastify({
  logger: true,
});

// Regístro de las variables de entorno
fastify.register(fastifyEnv, optionsEnv).ready((err) => {
  if (err) console.error(err);
});

// Regístrar y modificar los paquetes
fastify.register(connectDb);
fastify.register(cors, { origin: "*" });
fastify.register(formBody);
fastify.register(multer.contentParser);
// fastify.register(client.initialize())

// Regístrar las rutas
fastify.register(clientRoutes, { prefix: "/client" });
fastify.register(serviceRoutes, { prefix: "/service" });
fastify.register(authRoutes, { prefix: "/auth" });
fastify.register(emailRoutes, { prefix: "/email" });

// Función para inicializar el servidor
const start = async () => {
  try {
    await fastify.ready();
    fastify.listen({ port: process.env.PORT, host: process.env.HOST });
    console.log("El servidor está escuchando por el puerto ", process.env.PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

// Inicializar el servidor
start();
