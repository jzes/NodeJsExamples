var reader = require('readline')

var rl = reader.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Que horas são? ', function (resposta) {
  console.log(resposta)
  console.log('A Aventura vai começar...')
})
