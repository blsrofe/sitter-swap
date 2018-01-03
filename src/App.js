import React, { Component } from 'react'
import './App.css'
import {Router} from "react-router-dom"
import NavBar from './components/NavBar'
import ContentPanel from './components/ContentPanel'
import history from './objects/history'

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: "false"
    }
  }

  getLoggedStatus = (dataFromChild) => {
    let status = localStorage.getItem('loggedIn')
    this.setState({ loggedIn: status })
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <NavBar isLoggedIn={this.state.loggedIn} />
          <ContentPanel passToParent={this.getLoggedStatus}/>
        </div>
      </Router>
    )
  }
}

export default App
