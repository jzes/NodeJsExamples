const os = require('os')

var cpus = os.cpus() // detalhe sobre as cpus do sistema
console.log(cpus)

console.log(os.EOL) // Qual o marcador de fim de linha do sistema operacional

console.log(os.arch()) // Arquitetura do sistema

console.log(os.freemem() / 1024) // quanta memóra tem livre no sistema

console.log(os.hostname()) // hostname
