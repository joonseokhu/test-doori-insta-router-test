import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import List from 'src/pages/List'
import Detail from 'src/pages/Detail'

function App(props) {
  // const 
  // console.log('dddd', props)
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/p/:postId" children={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
