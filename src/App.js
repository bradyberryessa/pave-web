import React from 'react'
import { css } from '@emotion/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import routes from './routes'
import SideNav from './web/SideNav'
import './App.css'

const App = () => {
  return (
    <IntlProvider locale='en'>
      <Router>
        <SideNav />
        <div css={mainContentLayoutCss}>
          {routes}
        </div>
      </Router>
    </IntlProvider>
  )
}

const mainContentLayoutCss = css`
  margin-left: 54px;
  padding: 20px 40px;
`

export default App
