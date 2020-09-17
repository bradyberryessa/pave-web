import React from 'react'
import { Route, Switch } from 'react-router-dom'
import People from './web/People'
import Settings from './web/Settings'
import Profile from './web/Profile'
import Features from './web/Features'

const routes = (
  <Switch>
    <Route path='/people' component={People} />
    <Route path='/settings' component={Settings} />
    <Route path='/profile' component={Profile} />
    <Route path='/features' component={Features} />
  </Switch>
)

export default routes
