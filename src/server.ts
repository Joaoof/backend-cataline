import express from 'express'

const app = express()

app.get('users', (request, response) => {
  return response.json(['usuário 1'])
})

app.post('./users', (request, response) => {
  return response.json({ message: 'Criando usuário' })
})

app.put('./users', (request, response) => {
  return response.json({ message: 'Atualizando usuário' })
})

app.delete('./users', (request, response) => {
  return response.json({ message: 'Deletando usuário '})
})

app.listen('3333', () => {
  console.log('BAck-end started!')
})