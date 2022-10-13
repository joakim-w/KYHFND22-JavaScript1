function Animal(name) {
  this.name = name
}

Animal.prototype.makeSound = function() {
  return `${this.name} makes a generic sound!`
}

// const animal = new Animal('nisse')
// console.log(animal.makeSound())

function Dog(name, year) {
  Animal.call(this, name)

  this.year = year
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype)

// säkerställ att rätt konstruktor används
Dog.prototype.constructor = Dog


Dog.prototype.bark = function() {
  return `${this.name} barks!`
}

const dog = new Dog('Bosse', 4)

console.log(dog)
console.log(dog.makeSound())
console.log(dog.bark())