import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './database'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API rodando com TypeScript e Express!')
});

// 🚀 Aqui está o SELECT * FROM users
app.post('/users', async (_req, res) => {
  try {
    const result = await db.query('SELECT * FROM users')
    res.json(result.rows)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))