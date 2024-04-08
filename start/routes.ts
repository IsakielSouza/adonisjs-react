const PostsController = () => import('#controllers/posts_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')
// ---------------------APP------------------------
router
  .group(() => {
    router.on('/login').renderInertia('auth/login')
    router.on('/register').renderInertia('auth/register')
    router.on('/posts').renderInertia('posts')
    router.on('/feeds').renderInertia('feeds')
  })
  .prefix('/app')

// ---------------------API------------------------
router.get('users', [UsersController, 'index'])
router.post('users', [UsersController, 'store'])
router.get('users/:id', [UsersController, 'show'])
router.put('users/:id', [UsersController, 'update'])
router.patch('users/:id', [UsersController, 'update'])
router.delete('users/:id', [UsersController, 'destroy'])

router.get('posts', [PostsController, 'index'])
router.post('posts', [PostsController, 'store'])
router.get('posts/:id', [PostsController, 'show'])
