var reader = require('readline')

var rl = reader.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Que horas são? ', function (resposta) {
  if (resposta === 'Hora de Aventura') {
    console.log('A Aventura vai começar...')
  }
})
