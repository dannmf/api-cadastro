// src/routes/users_routes.ts
import { FastifyInstance } from 'fastify'
import { usersController } from '../controllers/users_controller'

export async function usersRoutes(fastify: FastifyInstance) {

  fastify.post('/users', usersController.create)
  
  fastify.get('/users', usersController.findAll)
  
  fastify.get('/users/:id', usersController.findById)
  
  fastify.put('/users/:id', usersController.update)
  
  fastify.delete('/users/:id', usersController.delete)
}