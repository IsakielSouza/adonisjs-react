import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index() {
    return User.query()
  }
  async store() {
    return 'Hello World! index'
  }
  async show({ params }: HttpContext) {
    const id = params.id
    return { message: 'Hello World! show', id }
  }
  async destroy({ params }: HttpContext) {
    const id = params.id
    return { message: 'Hello World! show', id }
  }
}
