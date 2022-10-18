/*
  4 pelare inom Objektorienterad programmering (OOP)
  * Encapsulation
  * Inheritance
  * Polymorphism
  * Abstraction

  JS
  * Encapsulation
  * Inheritance
  * Polymorphism
  
  <= ES5
  * Inheritance

  >= ES6
  * Encapsulation
  * Polymorphism
*/

class Product {
  constructor(name, desc, price, instock) {
    this.name = name
    this.description = desc
    this.price = price
    this.instock = instock
  }

  priceInclVat() {
    return this.price * 1.25
  }
}


const p1 = new Product('product 1', 'this is a product', 100, true)

// console.log(p1)
// console.log(p1.priceInclVat())



// Inheritance
// Arv mellan klasser

class Person {                              // Super
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  displayName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('Nisse', 'Andersson')

// console.log(person.displayName())

class Student extends Person {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName)
    this.studentId = studentId
    this.learedSkills = []
  }
}


class Teacher extends Person {
  constructor(firstName, lastName, teacherId, skills) {
    super(firstName, lastName)
    this.teacherId = teacherId
    this.skills = skills
  }
  
  displaySkills() {
    this.skills.forEach(skill => {
      console.log(skill)
    })
  }
}

// const firstNameInpput = document.querySelector('#firstName')

const s1 = new Student('John', 'Doe', 12345)

console.log(s1)
// s1.displaySkills()

const t1 = new Teacher('Joakim', 'Wahlström', 1, ['Javascript', 'HTML', 'CSS', 'C#'])


t1.displaySkills()

console.log(t1.skills)

// s1.learedSkills = []
t1.skills.forEach(skill => {
  s1.learedSkills.push(skill)
})

console.log(s1)

const s2 = new Student('Jane', 'Doe', 12)

console.log(s2)

const students = [s1, s2]

console.log(students)

if(students.some(student => student.firstName === 'Jane')) {
  console.log('det finns en student som redan heter det')
}
else {
  // const s3 = new Student('Janasde', 'Doasde', 13)
  console.log('studenten finns inte')
}
