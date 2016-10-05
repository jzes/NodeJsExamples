var things = require('./modules')

console.log(things.add(2, 3))

things.readFile('/home/jzes/pgadmin.log').then(function (retorno) {
  console.log(retorno)
})

var myPeople = new things.People('kaio', 52, 'abacate')
console.log(myPeople.age + ' is ' + myPeople.name)
