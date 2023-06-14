const sendEmail = require ("../controllers/email.controller");
const validEmail = require ("../validSchema/validEmail");

const emailRoutes = (fastify, opts, done) => {
    fastify.post('/send', {schema: validEmail},sendEmail)

    done();
}

module.exports = emailRoutes;