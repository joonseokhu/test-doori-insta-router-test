import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Portal = ({ children }) => {
  const el = document.getElementById('modal-container')
  return ReactDOM.createPortal(children, el)
}

const Modal = ({ children }) => (
  <Portal>
    <ModalContainer>
      {children}
    </ModalContainer>
  </Portal>
)

export default Modal

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
