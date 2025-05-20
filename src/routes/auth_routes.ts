import { FastifyInstance } from "fastify";
import { authController } from "../controllers/auth_controller";

export async function authRoutes(fastify: FastifyInstance) {
    fastify.post('/login', authController.login)
}