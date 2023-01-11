import React, { Fragment } from 'react'
import HomePage from './view/homePage/index'
import myBlog from './view/myBlog/index'
import lifeRecord from './view/lifeRecord/index'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/homePage" component={HomePage} />
          <Route path="/" component={HomePage} exact />
          <Route path="/myblog" component={myBlog} />
          <Route path="/lifeRecord" component={lifeRecord} />
          <Redirect from="/" to={"/homePage"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App