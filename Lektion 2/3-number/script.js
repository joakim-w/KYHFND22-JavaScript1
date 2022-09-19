/*
  Numbers
  ----------------------------------------

  +   lägg till
  -   ta bort
  *   gångra
  **  upphöjt i
  /   dela
  ++  öka med 1
  --  minskar med 1
  %   division remainder

  =   lika med
  +=  lägg till på det ursprungliga värdet
  -=  ta bort från det ursprungliga värdet
  *=  gångra och lägg till
  /=  dela och lägg till

*/

let string1 = 'Hej';

let num1 = 10;
let num2 = 2.9;
// console.log(string1 + num1);
// console.log(num1 + num2)

num1 = num1 + 1;
num1 += 1;
num1++;

num1 = num1 - 1;
num1 -= 1;
num1--;
// console.log(num1);

// console.log(num1 % 2)


// Avrunda
// console.log(Math.round(num2));

// Avrunda uppåt
// console.log(Math.ceil(num2));

// Avrunda neråt
// console.log(Math.floor(num2));

// let randomNr = Math.floor(Math.random() * 100 + 1);
// let randomNr = Math.random() * 100
// console.log(Math.floor(randomNr) +1)
// console.log(randomNr)


let text = 'text, ';
// text += text;
// text += text;
// text += text;
// text += text;
text *= 10;

console.log(text)

let food = ['pizza', 'mcDonalds', 'tacos', 'smörgåstårta', 'köttbullar', 'korv med bröd', 'names']

let number = Math.floor(Math.random() * food.length)
console.log(food)
console.log(food.length)
console.log(food[number])
console.log(number)

document.body.innerHTML = `<h1>Vad ska jag äta idag? ${food[number]}, Smaklig måltid! :)</h1>`