'use strict'

const Factory = use('Factory')

class UserSeeder {
  async run () {
    await Factory.model('App/Models/User').create({
      name: 'Fulano da Silva',
      email: 'fulano@email.com',
      password: '123' 
    })
  }
}

module.exports = UserSeeder
