import React, { Component } from 'react'
import UserProfile from './UserProfile'
import DogInfoBox from './DogInfoBox'

class UserProfileBoxes extends Component {
  render() {
    return(
      <section className="user-profile-box">
        <UserProfile id={this.props.match.params.id}/>
        <DogInfoBox />
      </section>
    )
  }
}

export default UserProfileBoxes
