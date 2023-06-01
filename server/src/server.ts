import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: '6t25rh652g652wefqe894e65',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running on port http://localhost:3333')
})
