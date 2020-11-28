import Popup from './components/Popup'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './configs/routes'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

function App () {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            <Popup/>
            {Object.keys(routes).map(routeKey => (
              <Route Key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App