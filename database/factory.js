'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  return {
    name: data.name,
    email: data.email,
    password: data.password
  }
})

Factory.blueprint('App/Models/Product', async (faker, i, data) => {
    return {
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        stock: data.stock,
    }
})