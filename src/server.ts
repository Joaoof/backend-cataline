import express from 'express'

const app = express()

app.use(express.json())

interface User {
  id: string
  name: string
  email: string
}

const users: User[] = []

app.get('/users', (request, response) => {
  return response.json(['usuário 1'])
})

app.post('/users', (request, response) => {
  return response.json({ message: 'Criando usuário' })
})

app.put('/users', (request, response) => {
  return response.json({ message: 'Atualizando usuário' })
})

app.delete('/users', (request, response) => {
  return response.json({ message: 'Deletando usuário '})
})

app.listen('3333', () => {
  console.log('BAck-end started!')
})