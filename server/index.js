// index.js

const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'Pulsifi Assignment 1 - create CI' })
  })
  
  // Run the server!
  fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })