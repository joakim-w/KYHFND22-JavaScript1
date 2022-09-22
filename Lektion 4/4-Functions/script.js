// SCOPE

let age = 34; // global scope
// let age = 55;

if(true) {
  let fName = 'Joakim';  // Local scope
  let age = 55;
  
  if(true) {
    age = 100;
    var lastName = 'Wahlström'
    // console.log('inne i kodblock 1.2 ', age, fName);
  }
  // console.log('inne i 1a kodblocket ', age, fName, lastName);
  
}

if(true) {
  // console.log('kodblock 2 ', age)
}

// console.log('utanför något block ', age, lastName);



// FUNCTIONS
// är till för att underlätta, så vi slipper repetera våran kod

// Deklarera en funktion
// function hej() {
//   console.log('hej på dig');
// }

// const greet = function() {
//   console.log('hur är läget?')
// }

// köra en funktion
// hej();
// greet();


let firstName = 'Joakim';

const greet = function(name) {
  console.log(`Hej ${name} hur är läget?`)
  // return `Hej ${name} hur är läget?`
}

// greet('Joakim')
// greet('Hans')
// greet(firstName)

// console.log(greet('Jeanette'))

// let wife = greet('Jeanette')

// console.log(wife)


const getFullName = function(firstName, lastName) {
  if(typeof firstName != 'string') {
    console.log('hörrö man kan inte heta sådär')
    return
  }


  let fullName = firstName + ' ' + lastName;
  
  return fullName
  // return `${firstName} ${lastName}`
}

const fullName = getFullName('Joakim', 'Wahlström');
let test = getFullName(123, 456)
// console.log(fullName)
// console.log(getFullName('Hans', 'Mattin-Lassei'))

const calc = function(num1, num2) {
  let sum = +num1 + +num2
  // TESTA ATT KONSTROLLERA SÅ SUM INTE ÄR NaN
  return sum
}


console.log(calc(5, 10));
console.log(calc('5', '10'));
console.log(calc('hej ', 'då'));

// ARROW FUNCTIONS


// const calc2 = (num1, num2) => {
//   return +num1 + +num2
// }

const calc2 = (num1, num2) => +num1 + +num2;

console.log(calc2(10, 10));

// När man bara har EN parameter så behövs inte pareteserna
const greet2 = name => `Hejsan ${name}`;

console.log(greet2('Nisse'));

// En arrow funciton har som syfte att INTE binda nyckelordet "this"

// METODER - funktioner som hör ihop med ett objekt

const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  arrow: () => {
    console.log('arrow function ', this)
  },
  regularFunction: function() {
    console.log('regular function ', this)
  }
}

console.log(this)
user.arrow()
user.regularFunction()