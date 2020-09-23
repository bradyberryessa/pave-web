import React from 'react'
import { Route, Switch } from 'react-router-dom'
import People from './web/People'
import Settings from './web/Settings'
import Profile from './web/Profile'
import Features from './web/Features'
import Login from './web/Login'
import Register from './web/Register'
import ProtectedRoute from './web/ProtectedRoute'

const routes = (
  <Switch>
    <Route component={Login} path='/login' />
    <Route component={Register} path='/register' />
    <ProtectedRoute component={People} path='/people' />
    <ProtectedRoute component={Settings} path='/settings' />
    <ProtectedRoute component={Profile} path='/profile' />
    <ProtectedRoute component={Features} path='/features' />
  </Switch>
)

export default routes
