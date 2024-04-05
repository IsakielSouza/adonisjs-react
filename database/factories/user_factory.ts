import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      birthdate: faker.date.birthdate().toISOString().split('T')[0],
      phone: faker.string.numeric('+55(##)#####-####'),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 16 }),
    }
  })
  .build()
