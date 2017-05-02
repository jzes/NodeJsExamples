
// Lista de objetos "Explicitos" pessoas

var pessoas = [{
  nome: 'digue',
  idade: 22,
  gostaDe: 'linguiça',
  comer: function (oQueComer) {
    if (this.gostaDe === oQueComer) {
      console.log(oQueComer)
    } else {
      console.log('não gosto disso')
    }
  }
},
{ nome: 'jose',
  idade: 26,
  gostaDe: 'bacon',
  comer: function (oQueComer) {
    if (this.gostaDe === oQueComer) {
      console.log(oQueComer)
    } else {
      console.log('não gosto disso')
    }
  }
}]

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome)
  pessoa.comer('bacon')
})
