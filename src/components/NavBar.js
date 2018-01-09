import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {username: "",
                  paws: ""}
  }

  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }

  componentDidMount() {
    const getPaws = localStorage.getItem("paws")
    this.setState({ paws: getPaws})
  }


  render() {
    const { isAuthenticated } = this.props.auth
    let paws = this.state.paws
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
          <li><a href=""><img src={require('../images/white_paw_2.png')} id="paw" alt="pawprint" /> {paws}</a></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
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
