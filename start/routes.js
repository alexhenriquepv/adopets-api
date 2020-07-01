'use strict'

const Route = use('Route')

Route.group(() => {
  Route.resource('products', 'ProductController').middleware('auth')
  Route.get('products/category/:name', 'ProductController.category')

  Route.post('auth/register', 'UserController.register').validator('StoreUser')
  Route.post('auth/login', 'UserController.login').validator('Login')
  Route.post('auth/logout', 'UserController.logout')
})
.prefix('api')
.middleware('log')
