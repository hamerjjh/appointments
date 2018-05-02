import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <HomePage />
          <Switch>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App