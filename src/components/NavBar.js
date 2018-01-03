import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: "",
                  username: ""}
  }

  componentWillMount() {
    this.setState({ isLoggedIn: this.props.isLoggedIn})
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn
    let rightNav = null
    console.log(isLoggedIn)

    if (isLoggedIn) {
      rightNav = (<ul id="right-nav">
                    <li><NavLink to="/">Welcome, User</NavLink></li>
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
