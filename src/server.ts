import Fastify from 'fastify';
import { routes } from './routes'; // Verifique se o caminho está correto
import fastifyCors from '@fastify/cors';

const fastify = Fastify({
    logger: true
});

fastify.register(fastifyCors, {
    origin: true // Permitir todas as origens
});

fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen({ port: 3100 });
        console.log('Server listening on http://localhost:3100');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
