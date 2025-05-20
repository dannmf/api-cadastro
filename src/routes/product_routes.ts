import { FastifyInstance } from "fastify";
import { productController } from "../controllers/product_controller";

export async function productRoutes(fastify: FastifyInstance) {
    fastify.post('/product', productController.create)

    fastify.get('/product', productController.findAll)

    fastify.get('/product/count', productController.countProducts)

    fastify.get('/product/lowStock', productController.lowStockProducts)

    fastify.get('/product/:id', productController.findById)

    fastify.put('/product/:id', productController.update)

    fastify.delete('/product/:id', productController.delete)
}