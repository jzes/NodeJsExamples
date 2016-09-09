const assert = require('assert')

var objectExample = {
  testeWithAss: function () {
    assert.equal(1, 0) // retorna erro caso o equal seja false
  }
}

objectExample.testeWithAss() // Chama a função do Obj Acima

/* OMITIR SIMPLESMENTE - Sem validação
 *PS.: Da pra fazer validação do erro*/

assert.throws( // omite o erro experado
  function () {
    throw new Error('Exemplo de erro') // Dispara um erro do tipo Error
  }, Error // Pega o tipo do erro a ser omitido
)
