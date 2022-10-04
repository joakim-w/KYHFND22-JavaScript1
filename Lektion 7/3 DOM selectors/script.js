// console.log(window)
// console.log(document)


const p1 = document.getElementsByTagName('p');
// console.log(p1);

const p2 = document.getElementsByClassName('paragraph');
// console.log(p2);

const p3 = document.getElementById('para');
// console.log(p3);

// query selector

const q1 = document.querySelector('p');
// console.log(q1);

const q2 = document.querySelectorAll('p');
// console.log(q2);

const q3 = document.querySelector('.paragraph');
// console.log(q3)

const q4 = document.querySelectorAll('.paragraph');
// console.log(q4)

const q5 = document.querySelector('#para');
console.log(q5)

// q2.forEach(node => {
//   console.log(node)
// })

console.log(q5.id)
q5.classList.add('ennyklass');
q5.classList.remove('ennyklass');
q5.innerText = 'en ny text';


const button = document.querySelector('#knapp')

const clickHandler = () => {}

button.addEventListener('click', (e) => {
  console.log('click')
  q5.innerText = 'DU CLICKADE PÅ KNAPPEN'
  document.body.style = 'background-color: hotpink;'
  console.log(e)
})

button.addEventListener('mouseover', () => {
  console.log('du hovrade över knappen')
})

// button.removeEventListener('click', () => {})


// button.addEventListener('click', clickHandler)
// button.removeEventListener('click', clickHandler)
