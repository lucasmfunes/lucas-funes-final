const express = require('express')
const { crearPalabraController, listarPalabrasController } = require('./controllers/wordController.js')


const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

app.post('/word', crearPalabraController)

app.get('/word', listarPalabrasController)