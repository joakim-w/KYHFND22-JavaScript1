let input = document.querySelector('#input');
let form = document.querySelector('#form');


// let
// const

// var

// NUMBER (inte integer)

let text = 'hej hej 123';
let text2 = '33';

let number1 = 33;
let number2 = 67;

// console.log(text + number1);
// console.log(text2 + number1);
// console.log(number1 + number2);


form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(+input.value)
})


// konvertera från text till number
let nr1 = Number(text2)
let nr2 = +text2

// console.log(nr1)

nr1 = nr1 + 2;
nr1 += 2;
nr1 ++;

// console.log(nr1)

let rndnr = Math.random() // ger tillbaka ett slumpat nummer mellan 0 - 1
let rndnr2 = rndnr * 100 // ger tillbaka ett slumpat nummer mellan 0 - 100
let rndnr3 = Math.floor(rndnr2) // ger tillbaka ett avrundat nummer (neråt)

let rndnr4 = Math.floor(Math.random() * 100 + 1); // Ger tillbaka ett slumpat och avrundat nummer mellan 1 - 100

// console.log(rndnr);
// console.log(rndnr2);
// console.log(rndnr3);
// console.log(rndnr4);




// STRING
//------------------------------------

let firstName = 'Joakim';
let lastName = 'Wahlström';

let greeting = 'Hej jag heter Joakim""""""" ``````'+ text + 'kljkasf '
let greeting2 = 'Hej jag heter Joakim""""""" ``````\'kljkasf\' '
let greeting3 = "'''''laskfdää''' ````` \"asdasd \" asdasd"
let greeting4 = `Hej jag heter ${firstName} '''''' """"""`


// console.log(greeting)
// console.log(dateString)


let words = greeting.split(' ')
// console.log(words)

let fullName = firstName + ' ' + lastName
fullName = firstName.concat(' ' +lastName)

// console.log(fullName)

let newNumber = 55;

// let numberString = String(newNumer)
// let numberString = newNumber.toString()
let numberString = '' + newNumber

// console.log(newNumber)
// console.log(numberString)


// OBJECT
// ---------------------------------------------------------------------
// key: value

const person = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 35
}

// konvertera TILL json från JS
const jsonPerson = JSON.stringify(person)

console.log(person)
// console.log(jsonPerson)

//Konvertera till JS från Json
const jsPerson = JSON.parse(jsonPerson)

// console.log(jsPerson)

// localStorage.setItem('test123', jsonPerson)
// sessionStorage.setItem('person', jsonPerson)

// const test = localStorage.getItem('test123')
// console.log(test)

// const myName = prompt('Vad heter du?');
// console.log(myName)

person.hairColor = 'brown'

console.log(person)


console.log(person.hairColor)
// console.log(person['hairColor'])

// Destructure
const { firstName : fName, lastName : lName, age, hairColor } = person
// const fName = person.firstName
console.log(fName, age)