
var fs = require('fs')

// Lê o arquivo, printa o erro caso exista, exibe os dados do arquivo
// Atravéz de callback que recebe os parametros de erro e dados

fs.readFile('/home/jzes/pgadmin.log', 'utf-8', function (err, data) {
  if (err) { console.log(err) } // Espero que isso seja legivel o suficiente
  console.log(data)
})
