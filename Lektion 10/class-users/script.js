import User from './models/UserModel.js'

const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const output = document.querySelector('#output');

const users = []


form.addEventListener('submit', e => {
  e.preventDefault()

  if(firstName.value.trim() === '' || 
  lastName.value.trim() === '' || 
  email.value.trim() === '') {
    console.log('du måste fylla i alla fält')
    return
  }


  const user = new User(firstName.value, lastName.value, email.value)

  users.push(user)
  console.log(users)
  form.reset()

  // output.innerHTML = ''
  users.forEach(user => {
    output.insertAdjacentHTML('beforeend', `
    <div class="card p-3 mb-3">
      <p class="h2">${user.firstName} ${user.lastName}</p>
      <p class="m-0">${user.email}</p>
    </div>
    `)
  })

})