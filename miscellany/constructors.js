
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
      console.log('I dont like this')
    }
  }
}

var jose = new People('jose', 26, 'bacon')
var steve = new People('Steve', 41, 'linguiça')

// Manipulating a object after creation of that

// Adding a property in people after creation of constructor
People.prototype.hightInCm = 170

// adding a new property
steve.from = 'India'

// adding a new function for this object
steve.play = function (instrument) {
  console.log('Playing ' + instrument)
}

var peoples = [jose, steve]

// Use object People
peoples.forEach(function (people) {
  console.log('new people ---------------------------------------------')
  console.log('Name.: ' + people.name)
  if (people.from !== undefined) {
    console.log('From.: ' + people.from)
  }
  if (people.play !== undefined) {
    console.log(people.play('Guitar'))
  }
  console.log(people.hightInCm)
  people.eat('bacon')
})
