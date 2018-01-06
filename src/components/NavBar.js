import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {username: ""}
  }

  login = () => {
   this.props.auth.login();
 }
 // calls the logout method in authentication service
 logout = () => {
   this.props.auth.logout();
 }


  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div>
      {
      isAuthenticated() &&
      <nav className="navbar">
        <ul id="left-nav">
  	      <li><a href=""><img src={require('../images/double_s.png')} id="logo" alt="two letter s" /></a></li>
  	      <li><NavLink to="/" id="title">Sitter Swap</NavLink></li>
        </ul>
        <ul id="right-nav">
          <li><NavLink to="/">Welcome to SitterSwap!</NavLink></li>
          <li><a onClick={this.logout}>Logout</a></li>
        </ul>
      </nav>
      }

      {
      !isAuthenticated() &&
      <nav className="navbar">
        <ul id="left-nav">
  	      <li><a href=""><img src={require('../images/double_s.png')} id="logo" alt="two letter s" /></a></li>
  	      <li><NavLink to="/" id="title">Sitter Swap</NavLink></li>
        </ul>
        <ul id="right-nav">
          <li><a onClick={this.login}>Login/Create Account</a></li>
        </ul>
      </nav>
      }
      </div>
    )
  }
}

export default NavBar
