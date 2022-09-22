

const namesArray = ['Joakim', 'Hans', 'Jeanette', 'Tommy', 'Jack', 'Colin'];

const usersArray = [
  { name: 'Joakim', email: 'joakim@mail.com', age: 35, status: true },
  { name: 'Hans', email: 'Hans@mail.com', age: 37, status: false },
  { name: 'Jeanette', email: 'Jeanette@mail.com', age: 35, status: false },
  { name: 'Tommy', email: 'Tommy@mail.com', age: 39, status: false },
  { name: 'Jack', email: 'Jack@mail.com', age: 7, status: false },
  { name: 'Colin', email: 'Colin@mail.com', age: 5, status: false }
]

// FOR loopar - loopar ett givet antal gånger
for(let i = 0; i < 5; i++) {  // array.length loopar igenom en hel array
  // console.log(i)
  // console.log(names[i])
} 

// FOR OF - loopar igenom en hel array

for(let name of namesArray) {
  // console.log(name)
}

for(let user of usersArray) {
  // console.log(user.name, user.age)
}

// FOREACH
usersArray.forEach(user => {
  // console.log(user.name, user.age)
})



// WHILE

let i = 978;

while( i < 5 ) {
  console.log('while: ' + i);
  i++;
}

console.log(i)


// DO WHILE - kommer alltid att köras minst 1 gång

do {
  console.log('do while: ' + i);
  i++;
} while( i < 10 )

console.log(i)
