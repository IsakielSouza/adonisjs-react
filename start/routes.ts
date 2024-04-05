/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('/signIn').renderInertia('auth/sign_in', { version: 6 })
router.on('/signUp').renderInertia('auth/sign_up')

router.on('/posts').renderInertia('posts')

router.on('/api').renderInertia('home', { version: 6 })
