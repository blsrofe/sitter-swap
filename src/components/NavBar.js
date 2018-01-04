import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: "",
                  username: ""}
  }


  render() {
    const isLoggedIn = localStorage.getItem('loggedIn')
    const name = localStorage.getItem('username')
    let rightNav = null

    if (isLoggedIn === "true") {
      rightNav = (<ul id="right-nav">
                    <li><NavLink to="/">Welcome, {name}</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                  </ul>)
    } else {
      rightNav = (<ul id="right-nav">
                    <li><NavLink to="/login">Sign In</NavLink></li>
                    <li><NavLink to="/new">Create Account</NavLink></li>
                  </ul>)
    }

    return (
      <nav className="navbar">
        <ul id="left-nav">
  	      <li><a href=""><img src={require('../images/double_s.png')} id="logo" alt="two letter s" /></a></li>
  	      <li><NavLink to="/" id="title">Sitter Swap</NavLink></li>
        </ul>
          {rightNav}
      </nav>
    )
  }
}

export default NavBar
