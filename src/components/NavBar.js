import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul id="left-nav">
  	      <li><a href="">Logo</a></li>
  	      <li><NavLink to="/">Sitter Swap</NavLink></li>
        </ul>
        <ul id="right-nav">
  	      <li><a href="">Login</a></li>
  	      <li><NavLink to="/new">Create Account</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
