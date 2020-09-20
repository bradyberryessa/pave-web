import React from 'react'
import { Route, Switch } from 'react-router-dom'
import People from './web/People'
import Settings from './web/Settings'
import Profile from './web/Profile'
import Features from './web/Features'
import Login from './web/Login'
import Register from './web/Register'

const routes = (
  <Switch>
    <Route component={Login} path='/login' />
    <Route component={Register} path='/register' />
    <Route component={People} path='/people' />
    <Route component={Settings} path='/settings' />
    <Route component={Profile} path='/profile' />
    <Route component={Features} path='/features' />
  </Switch>
)

export default routes
