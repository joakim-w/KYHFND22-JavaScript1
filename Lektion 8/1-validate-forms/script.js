const form = document.querySelector('#regForm');
const btn = document.querySelector('#btn');

const validateText = (id) => {
  const input = document.querySelector(id)    // hämtar en referens till våran input med hjälp av id

  if(input.value.trim() === '') {
    return setError(input)                   // Här kallar vi på setError funktionen och skickar med våran referens till input
  } 
  else if (input.value.length < 2) {
    return setError(input)
  }
  else {
    return setSuccess(input)
  }

}

const validateEmail = (id) => {
  const email = document.querySelector(id)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

  if(email.value.trim() === '') {
    return setError(email)
  }
  else if(!regEx.test(email.value)) {
    return setError(email)
  }
  else {
    return setSuccess(email)
  }

}

const validateCheck = (id) => {
  const checkbox = document.querySelector(id)

  if(!checkbox.checked) {
    return setError(checkbox)
  }
  else {
    return setSuccess(checkbox)
  }


}

const setSuccess = (input) => {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  return true;
}

const setError = (input) => {        // Deklarerar setError och tar emot en input referens
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  input.focus();
  return false;
}



form.addEventListener('submit', e => {  // lyssnar efter ett event 'submit'
  e.preventDefault()                    // förhindrar webbläsaren att ladda om sidan

  // validateText('#firstName')
  // validateText('#lastName')
  // validateEmail('#email')
  // validateCheck('#terms')

  // if(validateText('#firstName') &&
  // validateText('#lastName') &&
  // validateEmail('#email') &&
  // validateCheck('#terms')) {

  //   console.log('skickar iväg till databasen')
  // }

  const errors = [];  // skapar en tom array där vi kan lägga eventuella error

  for(let i = 0; i < form.length; i++) {
    // console.log(form[i])
    // console.log(form[i].type)
    // console.log(form[i].id)
    const inputId = '#' + form[i].id  // plockar ut id på den aktuella inputen
    // console.log(inputId)

    if(form[i].type === 'text') {     //Kollar om den aktuella inputen är av typen text
      errors[i] = validateText(inputId) // validerar rätt typ av input
    } 
    else if(form[i].type === 'email') {     //Kollar om den aktuella inputen är av typen email
      errors[i] = validateEmail(inputId)
    }
    else if(form[i].type === 'checkbox') {     //Kollar om den aktuella inputen är av typen checkbox
      errors[i] = validateCheck(inputId)
    }
  }

  console.log(errors)

  if(errors.includes(false)) {        // kollar om arrayen errors innehåller ett false värde
    console.log('vi har fel i formuläret!')
  }
  else {
    console.log('allt är jättebra och vi skickar till databasen')
  }

})