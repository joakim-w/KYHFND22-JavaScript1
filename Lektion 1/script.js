// KOMMENTARER

// alert('Hello World');

// single line comment , inline comment

/*
multi line
comment
*/


// CONSOLEN

// console.log(".log() informationstext");
// console.warn(".warn() = varningstext");
// console.error(".error() = felmeddelande");


// VARIABLER
// variabel = någonting som vi lagrar information i

firstName = 'Joakim';  // Global deklarering (Gör INTE såhär)
var firstName = 'Nisse'; // Global deklarering (Gör INTE såhär)
var firstName = 123;

// let, const

let lastName = 'Wahlström'; // lokal deklarering (Gör såhär!)

{
  let insideScope = 'hej';

  var test = 'test';
  const isTired = true;

  // console.log(insideScope);
  // console.log(lastName);
  // isTired = 123;
  // console.log(isTired);
}

lastName = 'Andersson';
// lastName = 123456;

const pi = 3.14; // lokal deklarering (Gör såhär!)
// pi = 456;

// console.log(pi)
// console.log(lastName)


/*
Deklarera variabler
---------------------------------------------------------

var = global variabel - accessbar överallt i koden
let = lokal variabel - accessbar inom det angivna området (scope)
const = konstant - lokal variabel som inte kan skrivas över (undantag finns)


C# exempel.
  string name = "Joakim";
  int age = 35;
JS exempel.
  let name = 'Joakim';
  let age = 35;



camelCase       =   JavaScript, Java, c, c++
Pascal          =   C#, Pascal
_private        =   en variabel som bara lever inom en viss del
SCREAMING_SNAKE_CASE  = används ibland för att deklarera en konstant

kebab-case
snake_case

*/
/* 
  JavaScript Datatyper
  ------------------------------------------------

  String      =   Text, 'abc', '123'
  Number      =   Heltal, decimaltal
  Boolean     =   Sant/Falskt, true, false
  Null        =   Tomt, (manuellt)
  Undefined   =   Odefinerat, tomt (automatiskt)
  Object      =   ett objekt innehåller ett eller flera andra värden
  Array       =   lista med värden, Array är av datatypen OBJECT

*/

let datatype;

console.log(typeof datatype);
datatype = 'en text'
console.log(typeof datatype);
datatype = 3
console.log(typeof datatype);
datatype = false
console.log(typeof datatype);
datatype = {}
console.log(typeof datatype);
datatype = []
console.log(typeof datatype);
datatype = null
console.log(typeof datatype);
