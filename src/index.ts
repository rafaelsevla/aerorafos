import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/ping", async (request, reply) => {
  return "pong";
});

const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
