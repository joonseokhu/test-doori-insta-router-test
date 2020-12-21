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

const PostDetail = props => {
  const modal = props?.location?.state?.modal ?? false
  const postId = props?.match?.params?.postId ?? null
  if (modal && postId) return (<List {...props} postId={postId} />)
  return (<Detail {...props} />)
}

function App(props) {
  const history = useHistory()

  React.useEffect(() => {
    window.addEventListener('beforeunload', () => {
      history.replace()
    })
  }, [history])

  return (
    <Router>
      <Switch>
        <Route exact path="/p/:postId" render={PostDetail} />
        <Route exact path="/" component={List} />
      </Switch>
    </Router>
  )
}

export default App
