import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class ChoiceBox extends Component {
  render() {
    const profileLink = '/profile'
    const requestLink = '/new-trip'
    return(
      <article className="choicebox">
        <h3><NavLink to={profileLink}>View/Edit Profile</NavLink></h3>
        <h3><NavLink to="/requests">View Sitter Requests</NavLink></h3>
        <h3><NavLink to={requestLink}>Make New Request</NavLink></h3>
      </article>
    )
  }
}

export default ChoiceBox
