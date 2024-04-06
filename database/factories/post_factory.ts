import factory from '@adonisjs/lucid/factories'
import Post from '#models/post'

export const PostFactory = factory
  .define(Post, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
    }
  })
  .build()
