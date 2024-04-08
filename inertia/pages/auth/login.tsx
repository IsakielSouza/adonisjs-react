import { Head } from '@inertiajs/react'

export default function Login() {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">Login</div>

        <span>Login</span>

        <form
          method="POST"
          // action={router.builder().make('users.delete', [user.id], { formAction: 'delete' })}
        ></form>
      </div>
    </>
  )
}
