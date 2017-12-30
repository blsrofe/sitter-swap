import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class ChoiceBox extends Component {
  render() {
    const link = '/users/' + this.props.id + '/profile'
    return(
      <article className="choicebox">
        <h3><NavLink to={link}>View/Edit Profile</NavLink></h3>
        <h3><NavLink to="/">View Sitter Requests</NavLink></h3>
        <h3><NavLink to="/new-trip">Make New Request</NavLink></h3>
      </article>
    )
  }
}

export default ChoiceBox
