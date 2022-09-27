const persons = [
  { firstName: 'Joakim', lastName: 'Wahlström', age: 35 },
  { firstName: 'Jeanette', lastName: 'Wahlström', age: 35 },
  { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 38 },

]


// FOR - loopa ett visst antal gånger
// FOR OF - looa igenom en hel array
// console.log(persons)

for(let i = 0; i < persons.length; i++) {
  // console.log(i)

  // console.log(persons[i].firstName)
}

for (let person of persons) {
  // console.log(person)
}

// FOR EACH

persons.forEach(person => {
  // console.log(person.lastName)
})


// WHILE & DO WHILE


let i = 8

while( i < 10 ) {

  i++
}

do {

  // console.log('hej')

  i++
} while (i < 11)



let nr = 14
let text = '13'

let value = 'Hans';

// IF SATSER

// console.log(nr < 15)


if(nr < 15) {
  // console.log('nr är mindre än 15')
}

if(true) {
  // gör vi någonting här
}
if(false) {
  // hoppa över HELA kodblocket
}


// console.log(nr == text)
if(nr == text) {
  // två = jäför bara innehållet
}


// console.log(nr === text)
if(nr === text) {
  // tre = jäför innehåll och datatyp
}

// ! = INTE

if(value) {
  if(nr == text) {
    // console.log('value är true & nr har samma värde som text')
  }
}

if(value && nr == text) {
  // console.log('value är true & nr har samma värde som text')
}

// value && console.log('hej')

// antingen eller ||
if(value || nr == text) {
  // console.log('antingen är value = true, eller så är nr och text samma')
}

let email = 'joakim-asda@mail.com'

if(email.includes('@') && !email.includes(' ')) {
  // console.log('mailadressen innehåller ett @ och INTE ett mellanslag')
}

if(!email.includes('@')) {
  // console.log('email innehåller INTE ett @')
}

const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

if(regEx.test(email)) {
  // console.log('email är ok!')
}
if(!regEx.test(email)) {
  // console.log('email är INTE ok!')
}

if(regEx.test(email) && value !== '') {
  // console.log('allt i "formuläret" ser bra ut')
}

// if(value !== '' && nr == text || 1 > 4) {

// }

if(value === 'Joakim') { console.log('hej ' + value)}
// else if(value === 'Hans') { console.log('är du här nu igen ' + value)}
// else {
//   console.log('vem är du?')
// }


// SWITCH

let number = 2;

switch(number) {
  case 1:
    console.log('nummret är 1');
    break;

  
  case 2:
    // console.log('nummret är 2');
    break;

  
  case 3:
    console.log('nummret är 3');
    break;

  
  case 4:
    console.log('nummret är 4');
    break;

  
  case 5:
    console.log('nummret är 5');
    break;

  default:
    console.log('jag kan inte räkna ut de där')
  
}


// FUNKTIONER

// hoisting - hissas till toppen

// console.log(funk1())

function funk1() { // Den här typen av funktion hoistas
  let sum = 3 + 5
  return sum
}

const funk2 = function() { // Den här typen av funktion ( när vi använder const ) Hoistas INTE
  let sum = 3 + 5
  return sum

  console.log('det här kommer aldrig att synas')
}

// console.log(funk2())

const funk3 = () => {
  let sum = 3 + 5
  // return sum
}

// console.log(funk3())

// const fullName = function(firstName, lastName) {
//   if(typeof firstName == 'string' && typeof lastName == 'string' && firstName !== '' && lastName !== '') {
//     return firstName + ' ' + lastName
//   }
//   return 'Du måste ange ett riktigt namn'
// }



const fullName = (firstName = 'John', lastName = 'Doe') => {

  return firstName + ' ' + lastName
}

// console.log(fullName())
// console.log(fullName('Joakim', 'Wahlström'))


const calc = (num1 = 0, num2) => {
  if(num1 && num2) {
    return +num1 + +num2;
  }

  return 'Du måste ange 2 nummer'
}

// console.log(calc(5))


const funk4 = () => {}
const funk5 = name => 'hej ' + name;
// const funk6 = (firstName, lastName) => {
//   return firstName + ' ' + lastName
// }
const funk6 = (firstName, lastName) => firstName + ' ' + lastName;



// console.log(funk5('Nisse'))



// METODER
// Funktioner som är innbyggda på ett objekt

const person = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  changeFirstName(newName) {
    this.firstName = newName
  },
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}


// person.firstName = 'Nisse'

// console.log(person)
person.changeFirstName('Hans')
// console.log(person)


// console.log(person.fullName())

const names = ['Joakim', 'Jeanette', 'Hans'];

// CALLBACK FUNKTIONER

// Exempel på callback funciton
// names.forEach(name => {
//   console.log(name)
// })


const minFunktion = (callback) => {

  let value = 500 + 35;

  callback(value)
}

minFunktion((value) => {
  // console.log(value)
})

// const newFunkction = (value) => { console.log(value)}

// newFunkction(567)
let counter = 0
minFunktion(value => {
  counter += value
})

// console.log(counter)

//cb = callback funktion
const calc2 = (num1, num2, num3, cb) => {
  let sum = +num1 + +num2 + +num3


  // return sum
  cb(sum)
}


// const summan = calc2(3, 5, 7)

// console.log(summan)

calc2(4, 7, 19, (sum) => {
  // console.log(sum)
  counter += sum
})


calc2(5, 5, 5, (summan) => {
  // console.log(summan)
})


// ÖVNINGSUPPGIFT 3

const greet = name => {
  console.log('Hello ' + name)
}
// greet('Joakim')

// 0-12 = "white"
// 13-18 = "green"
// 19-25 = "red"
// 26-99 = "blue"
// Annan siffra än ovan = "black"

const returnColor = (number) => {
  switch(true) {
    case (number >= 0 && number <= 12):
      return 'white'
    case (number >= 0 && number <= 18):
      return 'green'
    case (number >= 0 && number <= 25):
      return 'red'
    case (number >= 0 && number <= 99):
      return 'blue'
    default:
      return 'black'
  }

  // if(number >= 0 && number <= 12) {
  //   return 'white'
  // }
  // else if(number >= 13 && number <= 18) {
  //   return 'green'
  // }
  // else if(number >= 19 && number <= 25) {
  //   return 'red'
  // }
  // else if(number >= 26 && number <= 99) {
  //   return 'blue'
  // }
  // else {
  //   return 'black'
  // }
}

// console.log(returnColor(-1))

// Funktion 1:
// const hello = function() {
// console.log('Hello world');
// }

const hello = () => console.log('Hello world')
hello()


// Funktion 2:

// const calc = function(numberOne, numberTwo) {
// return numberOne + numberTwo;
// }

const calc3 = (numberOne, numberTwo) => numberOne + numberTwo; 
console.log(calc3(10,100))

// Funktion 3:
// const tip = function(sum, percent) {
// let total = sum + sum * percent;
// return total;
// }

const tip = (sum, percent) => {
  let total = sum + sum * (percent / 100);
  return total;
}

console.log(tip(100, 10))