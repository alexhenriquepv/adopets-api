'use strict'

const User = use('App/Models/User')

class UserController {

    async login ({ auth, request, response }) {
        const { email, password } = request.post()
        const data = await auth.withRefreshToken().attempt(email, password)
        response.send({ message: 'Logged', data: data })
    }

    async register({ request, response }) {
        const data = request.post()
        const u = await User.create(data)
        response.send({ message: 'Created', data: u })
    }

    async logout({ auth, request, response }) {
        const { refreshToken } = request.post()
        const data = await auth.authenticator('jwt').revokeTokens([refreshToken])
        response.send({ message: 'Logged out', data: data })
    }
}

module.exports = UserController
