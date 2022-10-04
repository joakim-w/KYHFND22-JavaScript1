const regForm = document.querySelector('#regForm');

const firstName = document.querySelector('#firstName');

// firstName.value = 'Joakim';

regForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(event)

  // console.log(event.target[0]);
  // console.log(event.target.firstName);
  // console.log(firstName);

  // console.log(firstName.value);

  const user = {
    firstName: firstName.value,
    lastName: event.target.lastName.value
  }

  console.log(user)
})


