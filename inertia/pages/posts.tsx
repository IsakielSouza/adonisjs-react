import { useEffect } from 'react'
import { Head } from '@inertiajs/react'
import { router } from '@inertiajs/react'
const PostsController = () => import('#controllers/posts_controller')
export default function Posts() {
  async function fetchPosts() {
    const posts = await PostsController()
    console.log({ posts })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">Posts</div>

        <span>Posts</span>
      </div>
    </>
  )
}
