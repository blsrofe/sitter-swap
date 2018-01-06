import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import handleErrors from '../objects/handleErrors'
import PublicProfile from './PublicProfile'
import DogInfoBox from './DogInfoBox'
import PublicDogInfoBox from './PublicDogInfoBox'
import FourOFour from "./FourOFour"

class UsersShow extends Component {

  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <div>
        {
        isAuthenticated() &&
        <section className="public-profile-dashboard">
          <PublicProfile />
          <PublicDogInfoBox />
          <h3><NavLink to="/requests">Back to Requests</NavLink></h3>
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

export default UsersShow
