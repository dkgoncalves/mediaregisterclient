import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import Register from './Register'
import ListMembers from './ListMembers'

const Routes = () => (
  <Router>
    <Route exact path="dkgoncalves.github.io/mediaregisterclient/" render={() => <Redirect to="/"  component={Home}/>} />
    <Route path="/mediaregisterclient/register" component={Register} />
    <Route path="/members" component={ListMembers} />
  </Router>
)

export default Routes
