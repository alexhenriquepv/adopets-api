'use strict'

const Factory = use('Factory')

class ProductSeeder {
  async run () {
    await Factory.model('App/Models/Product').create({
      name: 'Dry Food',
      description: '28-lb',
      category: 'Food',
      price: '148.90',
      stock: 5
    })

    await Factory.model('App/Models/Product').create({
      name: 'Wet Food',
      description: 'Adult classic sensitive',
      category: 'Food',
      price: '120.90',
      stock: 3
    })

    await Factory.model('App/Models/Product').create({
      name: 'Ultra Rubber Ball',
      description: 'Medium, 2 pack',
      category: 'Toys',
      price: '20.90',
      stock: 3
    })

    await Factory.model('App/Models/Product').create({
      name: 'Nylabone',
      description: 'Flavored Teething Dinosaur',
      category: 'Toys',
      price: '82.90',
      stock: 2
    })
  }
}

module.exports = ProductSeeder
