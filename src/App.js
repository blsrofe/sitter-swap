import React, { Component } from 'react'
import './App.css'
import {Router} from "react-router-dom"
import NavBar from './components/NavBar'
import ContentPanel from './components/ContentPanel'
import history from './objects/history'

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBar />
          <ContentPanel />
        </div>
      </Router>
    )
  }
}

export default App
