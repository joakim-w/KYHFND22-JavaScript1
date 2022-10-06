const form = document.querySelector('#regForm');
const btn = document.querySelector('#btn');

const validateText = (id) => {
  const input = document.querySelector(id)    // hämtar en referens till våran input med hjälp av id

  if(input.value.trim() === '') {
    setError(input)                   // Här kallar vi på setError funktionen och skickar med våran referens till input
  } 
  else if (input.value.length < 2) {
    setError(input)
  }
  else {
    setSucess(input)
  }

}

const validateEmail = (id) => {
  const email = document.querySelector(id)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

}


const setSucess = (input) => {
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

  validateText('#firstName')
  validateText('#lastName')
})