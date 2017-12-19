import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class NavBar extends Component {
  render() {
    return (
      <div id="navbar">
        <ul>
	        <li><a href="http://github.com">Logo</a></li>
	        <li><a href="http://github.com">SitterSwap</a></li>
	        <li><a href="http://github.com">Login</a></li>
	        <li><a href="http://github.com">Create Account</a></li>
        </ul>
      </div>
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
