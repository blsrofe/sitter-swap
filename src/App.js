import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul id="left-nav">
  	      <li><a href="">Logo</a></li>
  	      <li><a href="/">Sitter Swap</a></li>
        </ul>
        <ul id="right-nav">
  	      <li><a href="">Login</a></li>
  	      <li><a href="">Create Account</a></li>
        </ul>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    )
  }
}

export default App;
