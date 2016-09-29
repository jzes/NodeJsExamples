
// This is another form to represent an object in java script, this way uses a
//  constructor function to create an "raw" object and after this we can create a
//  instance of this object with any value we want
function Pessoa (nome, idade, gostaDe) {
  this.nome = nome
  this.idade = idade
  this.gostaDe = gostaDe
  this.comer = function (oQueComer) {
    if (oQueComer === gostaDe) {
      console.log(oQueComer)
    } else {
      console.log('não gosto disso')
    }
  }
}

var pessoa1 = new Pessoa('jose', 26, 'bacon')
var pessoa2 = new Pessoa('Steve', 41, 'linguiça')

var pessoas = [pessoa1, pessoa2]

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome)
  pessoa.comer('bacon')
})
