import { FastifyInstance } from "fastify";
import { categoryController } from "../controllers/category_controller";

export async function categoryRoutes(fastify: FastifyInstance) {
    fastify.post('/category', categoryController.create)

    fastify.get('/category', categoryController.findAll)

    fastify.get('/category/:id', categoryController.findById)

    fastify.put('/category/:id', categoryController.update)

    fastify.delete('/category/:id', categoryController.delete)
}