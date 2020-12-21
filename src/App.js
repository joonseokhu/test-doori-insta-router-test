import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom'

import List from 'src/pages/List'
import Detail from 'src/pages/Detail'
import PostDetailModal from 'src/components/PostDetailModal'

function App(props) {
  const history = useHistory()
  const location = useLocation()

  const background = location.state?.background

  React.useEffect(() => {
    window.addEventListener('beforeunload', () => {
      history.replace()
    })
  }, [history])

  return (
    <>
      <Switch location={background ?? location}>
        <Route exact path="/p/:postId" component={Detail} />
        <Route exact path="/" component={List} />
      </Switch>
      {background && <Route path="/p/:postId" render={() => <PostDetailModal location={background} />} />}
    </>
  )
}

export default App
