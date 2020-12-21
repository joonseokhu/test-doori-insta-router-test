import React from 'react'
import axios from 'axios'

const Layout = ({ children }) => (
  <div>
    <header>Memestagram</header>
    <main>{children}</main>
    <footer>by dobbydobby</footer>
  </div>
)

export default Layout
