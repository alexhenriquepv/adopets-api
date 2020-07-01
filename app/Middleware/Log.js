'use strict'

const Logger = use('Logger')

class Log {
  async handle ({ auth, request }, next) {
    const user = await auth.getUser()
    Logger.transport('file').info(`${user.name || 'anonymous'} - ${request.method()} ${request.url()}`)
    await next()
  }
}

module.exports = Log
