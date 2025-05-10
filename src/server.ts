import Fastify from 'fastify'
import cors from '@fastify/cors'
import { usersRoutes } from './routes/users_routes';
import { productRoutes } from './routes/product_routes';
const fastify = Fastify({ logger: true })

// Registra o CORS primeiro
fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
});

fastify.register(usersRoutes);
fastify.register(productRoutes);
fastify.register(usersRoutes);


const start = async () => {
    try {
        await fastify.listen({port:3333, host: '0.0.0.0'})
        console.log('Servidor rodando em http://localhost:3333')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()