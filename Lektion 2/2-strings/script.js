/*
  Strings - Text

  let firstName = "Joakim";
  let firstName = 'Joakim';   - Denna brukar vi oftast använda
  let firstName = `Joakim`;   - Använd denna när du ska göra en template literal (Placeholders) (shift + ´)
*/

let text = "Jag är \"bäst\" i 'hela' världen";
text = 'Jag är "bäst" `i` \'hela\' världen';
text = `Jag är "bäst" \`i\` 'hela' världen`;



let firstName = 'Joakim';
let age = '35';

text = 'Jag heter ' + firstName + ' och jag är ' + age + ' år gammal';
text = "Jag heter " + firstName + " och jag är " + age + " år gammal";

text = `Jag heter ${firstName} och jag är ${age} år gammal.`; // Template literal


// console.log(text);


// console.log(text.length)
// console.log(text[0])
// console.log(text.indexOf('e'))
// console.log(myName.toLowerCase())
// console.log(myName.toUpperCase())

let myName = 'Joakim Wahlström';
let names = myName.split(' ')

console.log(names)
// firstName = names[0]

// console.log(firstName)

let text2 = `                Mitt förnamn är ${firstName} och efternamnet är ${names[1]}                `
console.log(text2)

document.body.innerText = `Hej ${firstName[0]}, Välkommen tillbaka!`

console.log(text2.trim())

