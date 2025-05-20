import bcrypt from 'bcryptjs'
import { prisma } from '../lib/prisma'
import { signToken } from '../lib/jwt'

export class AuthService {
  async login(data: { email: string, password: string }) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password)

    if (!isPasswordValid) {
      throw new Error('Senha inválida')
    }


    const token = signToken({id: user.id})
    return { user, token }
  }
}
