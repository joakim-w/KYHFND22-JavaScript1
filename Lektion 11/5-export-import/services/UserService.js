export default class UserService {

  static signUp(user) {
    console.log('Registering a new user')
    console.log(user)
  }

  static signIn(email, password) {
    console.log('Signing in the user')
    console.log(email, password)
  }
}
