import Fastify from 'fastify'
const fastify = Fastify({ logger: true })
const PORT = process.env.PORT || 5000

// Declare a route
fastify.get('/api', async (request, reply) => {
  return { params: request.query }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
  }
}
start()
