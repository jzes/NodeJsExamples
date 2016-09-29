
// This is another form to represent an object in java script, this way uses a
//  constructor function to create an "raw" object and after this we can create a
//  instance of this object with any value we want

function People (name, age, likes) {
  this.name = name
  this.age = age
  this.likes = likes
  this.eat = function (whatEat) {
    if (whatEat === likes) {
      console.log(whatEat)
    } else {
      console.log('não gosto disso')
    }
  }
}

var jose = new People('jose', 26, 'bacon')
var steve = new People('Steve', 41, 'linguiça')

var peoples = [jose, steve]

peoples.forEach(function (people) {
  console.log(people.name)
  people.eat('bacon')
})
