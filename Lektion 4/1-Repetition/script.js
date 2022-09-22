// ARRAYS

const namesArray = ['Joakim', 'Jeanette', 'Hans', 'Tommy', 'Jack', 'Nisse'];


const test = {
  b: 'b',
  a: 'a',
}

// test.nyGrej = 'hejsan'
test['b'] = 'hejsan';

// console.log(test)


namesArray.unshift('Haithem');
namesArray.shift();

namesArray.push('Haithem');
const namn = namesArray.pop();


// console.log(namesArray)
// console.log(namn)

namesArray[0] = 'Isedor'

// console.log(namesArray.indexOf('Isedor'))

namesArray.unshift('Arne')

// namesArray.indexOf('Isedor') == 0
// console.log(namesArray)

namesArray[namesArray.indexOf('Isedor')] = 'Joakim'

// console.log(namesArray)


// const hej = namesArray.splice(0, 1, 'Jack', 'Colin')
// console.log(hej)

namesArray.sort();
// console.log(namesArray);
const lastNameInArray = namesArray.pop()
// console.log(lastNameInArray, namesArray)
// lastNameInArray == 'Tommy'
namesArray.unshift(lastNameInArray);

// console.log(namesArray)
namesArray.push('Uffe')

let numberOfPersons = 0;

for(let i = 0; i < namesArray.length; i++) {

  numberOfPersons++
  // console.log(i)
  // window.document.body.innerHTML += `<p>${namesArray[i]}</p>`;
  // console.log(namesArray[i])

}

// console.log('Det finns ' + numberOfPersons + ' personer i din familj')



const greetings = namesArray.map(function(familyMember) {
  return 'Hejsan ' + familyMember;
  // return `Hejsan ${familyMember}`;
})

console.log(greetings);
console.log(namesArray);



namesArray.forEach(name => {
  console.log(name)
})

greetings.forEach(greeting => {
  console.log(greeting)
})