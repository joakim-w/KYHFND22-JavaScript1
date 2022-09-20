// ARRAYS - en lista med ett eller flera värden

// var names = []
// let names = []
// const names = []

// Vi vill hålla samma datatyp inuti en array
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Gör inte såhär
// const multiArray = ['12', 12, true, {firstName: 'Joakim'}];


// Det här är också samma
// I det här fallet är datatypen object, objekten i sig kan innehålla flera datatyper, 
//men man vill hålla dom strukturerade likadant då
const users = [
  { id: 1, firstName: 'Joakim', lastName: 'Wahlström', age: 35, isActive: true },
  { id: 2, firstName: 'Hans', lastName: 'Mattin-Lassei', age: 38, isActive: true },
  { id: 3, firstName: 'Jeanette', lastName: 'Wahlström', age: 35, isActive: false },
]

const names = ['Joakim', 'Hans', 'Jeanette'];


// console.log(names[0])
// console.log(names[1])
// console.log(names[2])

// console.log(names);
// names[0] = 'Nisse'
// console.log(names[5])


// Lägga till i början av en array
names.unshift('Colin');
// console.log('Unshift: ', names);

// Ta bort i början av en array
names.shift();
// console.log('Shift: ', names);

//Lägga till i slutet av en array
names.push('Colin');
// console.log('Push: ', names);

// Ta bort i slutet av en array
names.pop();
// console.log('Pop: ', names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt namn'
// console.log('Ändrat: ', names);

// Hämta ur vilken indexplats någonting har i en array
// names.indexOf('Nytt namn') // ger -1 om det inte finns

// const i = names.indexOf('Nytt namn');
// console.log(i)
// names[i] = 'hej'
// console.log(names.indexOf('Nytt namn'))
names[names.indexOf('Nytt namn')] = 'Hej'

// console.log(names)

// delete - tar bort värdet på en specifik plats i en array, MEN inte platsen
// delete names[1];
// delete names[names.indexOf('Hej')];

// console.log(names)

// .splice() - tar bort och / eller lägger till ett värde från en specifik position
names.splice(1, 1); // tar bort 1 från indexplats 1
names.splice(1, 0, 'Colin', 'Hans') // tar bort 0 och lägger till Colin och Hans
// console.log(names)
names.splice(1, 2, 'Jack') // tar bort 2 platser från index 1 och lägger till Jack

// console.log(names)

// Hur lång är en array
// console.log(names.length)

const arrayToAdd = ['Colin', 'Hans']

// lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Hans'])) // skriver bara i consolen (modifierar inte ursprungliga värdet)
// names = names.concat(['Colin', 'Hans'])
const newNames = names.concat(arrayToAdd)
// console.log(newNames)


// names.splice(names.length -1, 0, arrayToAdd)
names.splice(names.length -1, 0, ...arrayToAdd)
// console.log(names)


// Spread operator

const obj = {
  firstName: 'Joakim',
  lastName: 'Wahlström'
}


const obj2 = {
  email: 'joakim@mail.com',
  obj
}

//----------------------------------------

const obj3 = {
  email: 'joakim@mail.com',
  ...obj,
}
// const obj3 = {
//   email: 'joakim@mail.com',
//   firstName: 'Joakim',
//   lastName: 'Wahlström'
// }

// console.log('obj2: ', obj2)
// console.log('obj3: ', obj3)

// console.log(obj)
// console.log(obj['firstName'])
// console.log(names[0])


// const test= ['Nisse', 'Haithem', 'Tommy', 'Annika']

// const newArray = [...names, ...test]
// const newArray2 = [names, test]
// console.log(newArray)
// console.log(newArray2)

// console.log(names)

// names.sort() // sortera i bokstavsordning
// console.log(names)
// names.reverse() // vänder på arrayen så först blir sist osv.
// console.log(names)

// names.sort().reverse() // Sortera i bokstavsordning baklänges
// console.log(names)

// const numbers = [40, 8, 3, 2, 5, -2, -5];

// console.log(numbers)
// numbers.sort()
// console.log(numbers)

// numbers.sort((a, b) => {
//   return a - b;
// })

const strings = ['Ca', 'Bb', '1a', 'aa', 'bb'] 


// console.log(strings)
strings.sort()
// console.log(strings)

// console.log(users)
users.sort((a, b) => {
  return a.age - b.age
})
// console.log(users)


// High order array methods
// En High Order method tar emot eller returnerar en funktion

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce
// const sum = numbers.reduce(function(acc, current) {
//   console.log('acc: ' + acc, 'current: ' + current);
//   return acc + current
// })

// console.log(sum);



// filter
// const filteredArray = numbers.filter((number) => {
//   return number < 6;
// })

// console.log(filteredArray)

// const activeUsers = users.filter(user => {
//   return user.isActive
// })

// console.log(activeUsers)

// const remainingUsers = users.filter(user => {
//   return user.id != 2
// })

// console.log(remainingUsers)

// console.log(users.filter(user => {
//   return user.lastName == 'Wahlström'
// }))


// Map - en loop som returnerar en ny array

const mappedArray = numbers.map((num, index) => {
  // return num + 10
  return `index: ${index} - nummer: ${num}`
})

// console.log(mappedArray)



// forEach - en loop

console.log(numbers)

numbers.forEach(num => {
  console.log(num)
})
