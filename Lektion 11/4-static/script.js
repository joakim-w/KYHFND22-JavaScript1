
class UserService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('Registering a new user')
    console.log(user)
  }

  static signIn(email, password) {
    console.log('Signing in the user')
    console.log(email, password)
  }
}


// const userService = new UserService()
// userService.signIn({firstName: 'Joakim', email: 'joakim@mail.com', password: 'bytMig123'})
UserService.signIn({firstName: 'Joakim', email: 'joakim@mail.com', password: 'bytMig123'})
