import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Register from './Register'
import ListMembers from './ListMembers'

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/members" component={ListMembers} />
  </Router>
)

export default Routes
