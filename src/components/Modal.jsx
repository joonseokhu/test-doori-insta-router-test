import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Portal = ({ children }) => {
  const el = document.getElementById('modal-container')
  return ReactDOM.createPortal(children, el)
}

const Modal = ({ children }) => (
  <Portal>
    <Container>
      <ModalContainer>
        {children}
      </ModalContainer>
      <ModalBackground />
    </Container>
  </Portal>
)

export default Object.assign(Modal, { Portal })

const Container = styled.div`
  position: relative;
`

const ModalContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const ModalBackground = styled.div`
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,0.2);
`
