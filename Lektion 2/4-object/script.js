/*
  OBJECT
  -innehåller ett eller flera värden

  skrivs som Key:Value par
  JSON är en typ av objekt (JavaScript Object Notation)

  var person = {}
  let person = {}
  const person = {}

  JS Objekt
  const person = {
    firstName: 'Joakim',
    lastName: 'Wahlström'
  }
  const person = { firstName: 'Joakim', lastName: 'Wahlström' }

  JSON Objekt
  const person = "{
    "firstName": "Joakim",
    "lastName": "Wahlström"
  }"
*/


const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 35,
  address: {
    street: 'En gata',
    nr: 12,
    postalCode: '73243',
    city: 'Västerås'
  },
  isActive: true,
  phoneNumbers: [
    '076-0254387', 
    '070-2347564'
  ]
}

// console.log(user)
// console.log(user.firstName)
// console.log(user.address.city)


// user = {
//   email: 'joakim@mail.com'
// }

user.email = 'joakim@mail.com'
user.firstName = 'Nisse'
// console.log(user)

let key = 'age'

// console.log(user['lastName'])
// console.log(user[key])


//Konvertera till JSON
let userJson = JSON.stringify(user)
// console.log(userJson)

//Konvertera från JSON till JS
let userJs = JSON.parse(userJson)
// console.log(userJs)

user.firstName = 'Joakim';

// console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`)

// const firstName = user.firstName;
// const address = user.address.city;

// console.log(firstName)


// Destructure

const { firstName, lastName, address: {city} } = user;
console.log(user)
console.log(`Användaren heter ${firstName} ${lastName} och bor i ${city}.`)