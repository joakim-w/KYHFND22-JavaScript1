const regForm = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');


const validateText = (input) => {
  if(input.value.trim() === '') {
    console.log('du måste skriva in ett namn')
    input.classList.add('error')
    input.classList.remove('success')
    return false;
  } else if(input.value.length < 2) {
    console.log('namnet måste vara minst 2 tecken')
    input.classList.add('error')
    input.classList.remove('success')
    return false;
  } 


  input.classList.add('success')
  input.classList.remove('error')
  return true
}


regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  validateText(firstName)
  validateText(lastName)

  if(validateText(firstName) && validateText(lastName)) {
    console.log('grattis du vet vad du heter');
    const user = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim()
    }
    console.log(user)
  }

})