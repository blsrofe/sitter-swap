import React, { Component } from 'react'

class UserProfile extends Component {

  //const id = this.props.params.id//I think this is how I grab the user id this.props.match.params.id
  render() {
    return(
      <article className="user-profile">
        <p>User profile</p>
      </article>
    )
  }
}

export default UserProfile
