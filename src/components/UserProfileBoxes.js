import React, { Component } from 'react'
import UserProfile from './UserProfile'
import DogInfoBox from './DogInfoBox'
import {NavLink} from "react-router-dom"

class UserProfileBoxes extends Component {
  render() {
    return(
      <section className="user-profile-box">
        <UserProfile id={this.props.match.params.id}/>
        <DogInfoBox id={this.props.match.params.id}/>
        <h1><NavLink to={'/users/' + this.props.match.params.id + '/dashboard' }>Visit Your Dashboard</NavLink></h1>
      </section>
    )
  }
}

export default UserProfileBoxes
