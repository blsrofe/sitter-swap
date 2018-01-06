import React, { Component } from 'react'
import FourOFour from "./FourOFour"
import UserAccountDecision from "./UserAccountDecision"

class UserProfileBoxes extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <div>
        {
        isAuthenticated() &&
          <section>
            <UserAccountDecision />
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
