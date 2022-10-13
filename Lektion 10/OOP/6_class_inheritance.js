// Super
class Animal {
  constructor(name) {
    this.name = name
  }

  makeSound() {
    return `${this.name} makes a generic sound!`
  }
}


class Dog extends Animal {
  constructor(name, year) {
    super(name)
    this.year = year
  }

  bark() {
    return `${this.name} barks!`
  }

  makeSound() {
    return `${super.makeSound()} and sits like a good boi`
  }
}

class Cat extends Animal {
  // constructor(name) {
  //   super(name)
  // }

  purr() {
    return `${this.name} purrs.`
  }
}


const animal = new Animal('nisse')
const dog = new Dog('Bosse', 4)
const cat = new Cat('katten')


// console.log(dog)
console.log(dog.makeSound())
console.log(dog.bark())

// console.log(animal)
// console.log(animal.makeSound())
// console.log(animal.bark())


// console.log(cat)
// console.log(cat.makeSound())
// console.log(cat.purr())
// console.log(cat.bark())
