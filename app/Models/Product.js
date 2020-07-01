'use strict'

const Model = use('Model')

class Product extends Model {

    static get primaryKey() {
        return 'uuid'
    }
}

module.exports = Product
