'use strict'

class StoreUser {
  get rules() {
    return {
      email: 'required|email|unique:users,email',
      password: 'required',
      name: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'name.required': 'You must provide a name',
    }
  }
}

module.exports = StoreUser
