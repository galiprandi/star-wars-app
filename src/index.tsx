import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Styles
import './index.css'

// Components
import { Home } from './Components/Home/Home'
import { CharacterDetails } from './Components/CharacterDetails/CharacterDetails'
import { Error404 } from './Components/Error404/Error404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/character/:id" component={CharacterDetails} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
