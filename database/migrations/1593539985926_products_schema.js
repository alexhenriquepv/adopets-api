'use strict'

const Schema = use('Schema')

class ProductsSchema extends Schema {

  up () {
    this.create('products', (table) => {
      table.increments('uuid')
      table.timestamps()
      table.string('name', 60).notNullable()
      table.string('description', 200).notNullable()
      table.string('category', 60).notNullable()
      table.float('price').notNullable()
      table.integer('stock').notNullable()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
