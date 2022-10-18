/*
  Encapsulation
  Getters / Setters  (read/write)
*/

// Utan getters och setters
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const p1 = new Person('Joakim', 'Wahlström')
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName())

// p1.fullName = 'Hans Mattin-Lassei'
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)

// console.log(p1)


// GETTER

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const p1 = new Person('Joakim', 'Wahlström')
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)

// p1.fullName = 'Hans Mattin-Lassei'
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)

// console.log(p1)



// SETTER
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   set fullName(value) {
//     const parts = value.split(' ')
//     this.firstName = parts[0]
//     this.lastName = parts[1]
//   }

//   set id(value) {
//     this._id = value
//   }
//   get id() {
//     return `userId: ${this._id}`
//   }
// }

// const p1 = new Person('Joakim', 'Wahlström')
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)

// p1.fullName = 'Hans Mattin-Lassei'
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)

// // p1._id = 'h2j'

// p1.id = 123
// console.log(p1)


/* private
      ett värde kan bara läsas inne i objektet
  
  public
      ett värde är tillgängligt utanför objektet
*/