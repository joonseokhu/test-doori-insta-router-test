import React from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Modal from 'src/components/Modal'
import PostDetail from 'src/components/PostDetail'

const NavButton = ({ text, history, id }) => (
  id && <NavButtonElem type="button" onClick={() => history.push(`/p/${id}`, { modal: true })}>{text}</NavButtonElem>
)

const PostDetailModal = ({ postId }) => {
  const history = useHistory()
  const [state, setState] = React.useReducer((prev, next) => ({ ...prev, ...next }), {
    prev_id: null,
    next_id: null,
  })

  React.useEffect(() => {
    console.log('postId', postId);
    (async () => {
      const { data } = await axios.get(`http://15.165.17.58/api/posts/${postId}`)
      const { prev_id, next_id } = data
      setState({ prev_id, next_id })
    })()
  }, [postId])

  return (
    <Modal.Portal>
      <Container>
        <CloseButton type="button" onClick={() => history.push('/')}>&times;</CloseButton>
        <Content>
          <NavButton text="&lt;" history={history} id={state.next_id} />
          <PostDetailWrapper>
            <PostDetail postId={postId} />
          </PostDetailWrapper>
          <NavButton text="&gt;" history={history} id={state.prev_id} />
        </Content>
      </Container>
    </Modal.Portal>
  )
}

export default PostDetailModal

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  width: 100vw;
  height: 100vh;
`

const NavButtonElem = styled.button`
  background: transparent;
  color: #fff;
  border: 0;
  font-size: 30px;
  margin: 10px;
  cursor: pointer;
`

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: transparent;
  color: #fff;
  border: 0;
  font-size: 30px;
  cursor: pointer;
`

const PostDetailWrapper = styled.div`
  background-color: #fff;
  max-height: 600px;
  height: calc(100vh - 20px);
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`
