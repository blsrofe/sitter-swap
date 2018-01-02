import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import handleErrors from '../objects/handleErrors'
import PublicProfile from './PublicProfile'
import DogInfoBox from './DogInfoBox'
import PublicDogInfoBox from './PublicDogInfoBox'

class UsersShow extends Component {

  render() {
    return(
      <section className="public-profile-dashboard">
        <PublicProfile id={this.props.match.params.id}/>
        <PublicDogInfoBox id={this.props.match.params.id}/>
        <h3><NavLink to="/requests">Back to Requests</NavLink></h3>
      </section>
    )
  }
}

export default UsersShow
