// Booleans true/false

// let text = 'hej'; // true
// let text2 = ''; // false

let email = 'joakim.wahlstrom@mail.com';

// console.log(email.includes('@')) // true
// console.log(email.includes('1')) // false

// -1 falsy värde = false
// 0 falsy värde = false 

// 1 truthy värde = true


// console.log(0 == false)



// COMPARE STATEMENTS

let number = 13;
let string = '13';

// Påstår att number är samma som 13
// console.log(number == 13);
// console.log(number == 20);

// Påstår att number INTE är samma som 13
// console.log(number != 13);
// console.log(number != 20);

// större än
// console.log(number > 10);
// // större eller lika med
// console.log(number >= 10);

// // mindre än
// console.log(number < 13);
// //mindre eller lika med
// console.log(number <= 13);


// // två = tecken jämför bara värdet
// console.log(number == string);

// // tre = tecken jämför värdet OCH datatyp
// console.log(number === string);


// console.log(string != number);
// console.log(string !== number);


// IF SATSER


if(true) { // Om det här är sant -
  // Gör någonting här
}
if(false) { // Om det här är falskt -
  // Hoppa över det här
}

let isLoggedIn = false
isLoggedIn = true

  if(isLoggedIn) {
    // console.log('användaren är inloggad')
  }
  if(!isLoggedIn) {
    // console.log('användaren är INTE inloggad')
  }

const names = [];

names.push('Joakim')
names.push('Jeanette')


// console.log(names)

if(names.length) {
  // console.log('arrayen names är längre än 0')
}

if(typeof number !== typeof string) {
  // console.log('yaay')
}

if('text' === 'text') {
  // console.log('texten är lika')
}



let name = 'Jeanette';

// if(name === 'Joakim') {
//   console.log('namnet är Joakim')
// }
// if(name === 'Hans') {
//   console.log('namnet är Hans')
// }
// if(name === 'Hans') {
//   console.log('namnet är Hans')
// }

if(name === 'Joakim') {
  console.log('namnet är Joakim')
} 
else if(name === 'Hans') {
  console.log('namnet är Hans')
} 
else if(name === 'Hans') {
  console.log('namnet är Hans')
}
else {
  console.log('okänt namn')
}


let value = 3;

if(value === 1) { console.log('värdet är 1') }
else if(value === 2) { console.log('värdet är 2') }
else if(value === 3) { console.log('värdet är 3') }
else if(value === 4) { console.log('värdet är 4') }
else if(value === 5) { console.log('värdet är 5') }
else if(value === 6) { console.log('värdet är 6') }
else if(value === 7) { console.log('värdet är 7') }
else if(value === 8) { console.log('värdet är 8') }
else if(value === 9) { console.log('värdet är 9') }
else if(value === 10) { console.log('värdet är 10') }
else if(value === 11) { console.log('värdet är 11') }
else { console.log('värdet finns inte i tabellen') }



// SWITCH

let color = 'red';


switch(color) {

  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'orange':
    console.log('color is orange');
    break;
  case 'white':
    console.log('color is white');
    break;
  case 'black':
    console.log('color is black');
    break;
  default:
    console.log('color unknown!');
}



let nr = 2

// jobbar som att det är 3st =
switch(nr) {
  case '2':
    console.log('Det är "2"');
    break;

  case 2:
    console.log('det är siffran 2')
}