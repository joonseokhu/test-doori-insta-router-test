import React from 'react'
import axios from 'axios'
import { useHistory, Route } from 'react-router-dom'
import Layout from 'src/components/Layout'
import Modal from 'src/components/Modal'
import PostDetail from 'src/components/PostDetail'

const Page = props => {
  const postId = props?.match?.params?.postId ?? null

  return (
    <Layout>
      <PostDetail postId={postId} />
    </Layout>
  )
}

export default Page
