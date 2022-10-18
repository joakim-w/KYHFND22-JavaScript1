import User from './models/UserModel.js'
import UserService from './services/UserService.js'
import { validatePassword } from './functions/Functions.js'


if(validatePassword('BytMig123')) {
  const user = new User('Joakim', 'Wahlström', 'joakim@mail.com', 'BytMig123')
  UserService.signUp(user)
  UserService.signIn(user.email, user.password)
} else {
  console.log('lösenordet måste inehålla minst en siffra')
}
