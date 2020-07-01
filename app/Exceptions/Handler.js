'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Logger = use('Logger')

class ExceptionHandler extends BaseExceptionHandler {

  async handle (error, { response }) {
    console.log(error.toString())
    let message = error.message
    
    if (error.code == 'E_VALIDATION_FAILED') {
      message = error.messages[0].message
    }

    response.status(error.status).send({
      code: error.code,
      message: message
    })
  }

  async report (error, { request }) {
    console.log(`${error.status} ${error.message}`)
    Logger.transport('file').error(`${error.status} ${error.message}`, request.url())
  }
}

module.exports = ExceptionHandler
