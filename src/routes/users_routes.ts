// src/routes/users_routes.ts
import { FastifyInstance } from 'fastify'
import { usersController } from '../controllers/users_controller'

export async function usersRoutes(fastify: FastifyInstance) {
  // Cria um novo usuário
  fastify.post('/users', usersController.create)
  
  // Lista todos os usuários
  fastify.get('/users', usersController.findAll)
  
  // Busca um usuário pelo ID
  fastify.get('/users/:id', usersController.findById)
  
  // Atualiza um usuário
  fastify.put('/users/:id', usersController.update)
  
  // Remove um usuário
  fastify.delete('/users/:id', usersController.delete)
}