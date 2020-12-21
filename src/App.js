import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Layout from 'src/components/Layout'
import List from 'src/pages/List'
import Detail from 'src/pages/Detail'

import Modal from 'src/components/Modal'
import { modalContext } from 'src/components/Layout/modalContext'

function Routes() {
  const isModal = React.useContext(modalContext)
  console.log(isModal)

  return isModal ? (
    <>
      <Route path="/" component={List} />
      <Modal>
        <Route path="/p/:postId" component={Detail} />
      </Modal>
    </>
  ) : (
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/p/:postId" component={Detail} />
    </Switch>
  )
}

function App(props) {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  )
}

export default App
