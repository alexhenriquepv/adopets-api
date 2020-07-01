'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get primaryKey() {
    return 'uuid'
  }

  static get hidden () {
    return ['password']
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
