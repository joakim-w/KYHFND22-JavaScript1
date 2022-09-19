// console.log('Det här är ett meddelande');
// console.warn('En varning');
// console.error('ett felmeddelande');

// en enkel kommentar

/*
  flera
  rader
*/



var firstName = 'Joakim';  //global variabel

let lastName = 'Wahlström'; // lokal (scopad) variabel
const pi = 3.14; // lokal konstant


lastName = 123456
// pi = 5;



let var1; // Undefined
console.log(typeof var1);
var1 = null; // Null (en bugg skriver ut object)
console.log(typeof var1);
var1 = '1234'; // String
console.log(typeof var1);
var1 = 123.12345; // Number
console.log(typeof var1);
var1 = false; // Boolean
console.log(typeof var1);
var1 = {}; // Object
console.log(typeof var1);
var1 = []; // Array (Object)
console.log(typeof var1);

