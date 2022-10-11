let scoreOne = 50;
let scoreTwo = scoreOne;

// console.log('scoreOne: ' + scoreOne, 'scoreTwo: ' + scoreTwo)

scoreOne = 100;

// console.log('scoreOne: ' + scoreOne, 'scoreTwo: ' + scoreTwo)



// const userOne = { name: 'Joakim', age: 35 };

// const userTwo = userOne;

// console.log(userOne, userTwo)

// userOne.name = 'Hans'
// userOne.age = 50

// console.log(userOne, userTwo)

const users = [
  { id: 1, name: 'Joakim', age: 35 },
  { id: 2, name: 'Hans', age: 50 },
  { id: 3, name: 'Jeanette', age: 30 },
]

console.log(users)


const hans = users.find(user => user.name === 'Hans')

console.log(hans)

hans.name = 'Nisse'


// console.log(users)
// console.log(hans)



const stringOne = 'Hej';
const stringTwo = 'Hej';
const stringThree = stringOne;

console.log(stringOne === stringTwo)
console.log(stringOne === stringThree)

const userOne = { name: 'Joakim', age: 35 };
const userTwo = { name: 'Joakim', age: 35 };
const userThree = userOne

console.log(userOne === userTwo)
console.log(userOne === userThree)

input.addEventlistener('click', () => {})
input.removeEventlistener('click', () => {})

const test = () => {}
input.addEventlistener('click', test)
input.removeEventlistener('click', test)