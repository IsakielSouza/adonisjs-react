import Post from '#models/post'
import { createPostValidator } from '#validators/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index() {
    return Post.query().orderBy('id', 'desc')
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    return Post.create(payload)
  }

  async show({ params }: HttpContext) {
    return Post.findOrFail(params.id)
  }
}
