import React from 'react'
import axios from 'axios'
import Layout from 'src/components/Layout'
import Modal from 'src/components/Modal'

const Detail = ({ postId }) => {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://15.165.17.58/api/posts/${postId}`)
      console.log(data)
      setPost(data)
    })()
  }, [])

  return (
    <div>
      {JSON.stringify(post)}
    </div>
  )
}

const Page = props => {
  const postId = props?.match?.params?.postId ?? null
  const modal = props?.location?.state?.modal ?? false

  console.log({ postId, modal })

  return (
    <>
      {modal ? (
        <Modal>
          <Detail postId={postId} />
        </Modal>
      ) : (
        <Layout>
          <Detail postId={postId} />
        </Layout>
      )}
    </>
  )
}

export default Page
