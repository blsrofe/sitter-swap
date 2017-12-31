import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import { login, logout, isLoggedIn } from '../objects/AuthService'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false, username: ""}
  }

  render() {
    return (
      <nav className="navbar">
        <ul id="left-nav">
  	      <li><a href=""><img src={require('../images/double_s.png')} id="logo" alt="two letter s" /></a></li>
  	      <li><NavLink to="/" id="title">Sitter Swap</NavLink></li>
        </ul>
        <ul id="right-nav">
          <li>
            {
              (isLoggedIn()) ? ( <button className="logout" onClick={() => logout()}>Log out </button> ) : ( <button className="login" onClick={() => login()}>Log In</button> )
            }
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
