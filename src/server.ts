import Fastify from 'fastify';
import { routes } from './routes'; // Verifique se o caminho está correto

const fastify = Fastify({
    logger: true
});

fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen({ port: 3100 });
        console.log('Server listening on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
