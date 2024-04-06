/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PostsController = () => import('#controllers/posts_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')
router.on('/signIn').renderInertia('auth/sign_in')
router.on('/signUp').renderInertia('auth/sign_up')

router.on('/posts').renderInertia('posts')

// routes API
router.get('api/users', [UsersController, 'index'])
router.post('api/users', [UsersController, 'store'])
router.get('api/users/:id', [UsersController, 'show'])
router.delete('api/users/:id', [UsersController, 'destroy'])

router.get('api/posts', [PostsController, 'index'])
router.post('api/posts', [PostsController, 'store'])
router.get('api/posts/:id', [PostsController, 'show'])
