const express = require('express')
const { crearPalabraController, listarPalabrasController, borrarPalabraController } = require('./controllers/wordController.js')
const { validateWordToCreate, validateWordToDelete } = require('./validations/wordValidation.js')

const app = express()
const port = 3000

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

app.post('/word', validateWordToCreate, crearPalabraController)

app.get('/word', listarPalabrasController)

app.delete('/word', validateWordToDelete, borrarPalabraController)

app.get('/word/info', borrarPalabraController)