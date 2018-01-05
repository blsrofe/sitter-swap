import React, { Component } from 'react'
import './App.css'
import {Router} from "react-router-dom"
import NavBar from './components/NavBar'
import ContentPanel from './components/ContentPanel'
import history from './objects/history'
import Auth from './objects/auth'

class App extends Component {


  render() {
    const auth = new Auth()
    return (
      <Router history={history}>
        <div className="App">
          <NavBar auth={auth} />
          <ContentPanel passToParent={this.getLoggedStatus}/>
        </div>
      </Router>
    )
  }
}

export default App
