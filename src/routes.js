import React from 'react'
import { Route, Switch } from 'react-router-dom'
import People from './components/People'
import Settings from './components/Settings'
import Profile from './components/Profile'

const routes = (
  <Switch>
    <Route path='/people' component={People} />
    <Route path='/settings' component={Settings} />
    <Route path='/profile' component={Profile} />
  </Switch>
)

export default routes
