import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoute(app: FastifyInstance) {
  app.get('/memories', async () => {
    return prisma.memory.findMany()
  })
}
