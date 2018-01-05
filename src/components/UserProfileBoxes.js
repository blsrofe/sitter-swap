import React, { Component } from 'react'
import UserProfile from './UserProfile'
import DogInfoBox from './DogInfoBox'
import {NavLink} from "react-router-dom"
import FourOFour from "./FourOFour"

class UserProfileBoxes extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <div>
        {
        isAuthenticated() &&
        <section className="user-profile-box">
          <UserProfile />
          <DogInfoBox />
          <h1><NavLink to={'/dashboard'}>Visit Your Dashboard</NavLink></h1>
        </section>
        }

        {
        !isAuthenticated() &&
        <FourOFour />
        }
      </div>
    )
  }
}

export default UserProfileBoxes
