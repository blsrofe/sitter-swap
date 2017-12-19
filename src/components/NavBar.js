import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
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

export default NavBar
