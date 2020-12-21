import { createContext, useContext } from 'react'

export const modalContext = createContext(false)

export const useModalContext = () => useContext(modalContext)
