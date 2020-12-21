import React from 'react'
import axios from 'axios'

const PostDetail = ({ postId }) => {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://15.165.17.58/api/posts/${postId}`)
      console.log(data)
      setPost(data)
    })()
  }, [postId])

  return (
    <div>
      {JSON.stringify(post)}
    </div>
  )
}

export default PostDetail
