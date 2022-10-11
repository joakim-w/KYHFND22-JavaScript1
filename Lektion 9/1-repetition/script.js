const form = document.querySelector('#loginForm');


const validateEmail = (input) => {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

  if(!regEx.test(input.value)) {
    console.log('email address must be valid')
    return 'fel'
  }

  return true
}

const validatePassword = (input) => {
  if(input.value.trim().length === 0) {
    console.log('du måste skriva in ditt lösenord')
    return 'fel'
  }


  return true
}

const submitHandler = function(e) {
  e.preventDefault();

  const errors = []
  let i = 0;
  for(input of e.target) {
    
    switch(input.type) {
        case 'email': 
          errors[i] = validateEmail(input)
          break;
        case 'password': 
          errors[i] = validatePassword(input)
          break;
        default: break;
      }
      i++
  }

  console.log(errors)

  if(errors.includes('fel')) {
    console.log('error')
    return
  }


  console.log('success')

}


form.addEventListener('submit', submitHandler)