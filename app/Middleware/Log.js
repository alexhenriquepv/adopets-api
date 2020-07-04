'use strict'

const Logger = use('Logger')

class Log {
  async handle ({ auth, request }, next) {
    try {
      const user = await auth.getUser()
      Logger.transport('file').info(`${user.name || 'anonymous'} - ${request.method()} ${request.url()}`)
    }
    catch (err) {}
    finally {
      await next()
    }
  }
}

module.exports = Log
