import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Layout from 'src/components/Layout'
import Modal from 'src/components/Modal'

const Detail = () => {
  const { postId } = useParams()
  const [post, setPost] = React.useState(null)
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://15.165.17.58/api/posts/${postId}`)
      setPost(data)
    })()
  }, [postId])

  return (
    <div>
      {JSON.stringify(post)}
    </div>
  )
}

export default Detail
