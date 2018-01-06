import React, { Component } from 'react'
import TripBox from './TripBox'
import MailBox from './MailBox'
import ChoiceBox from './ChoiceBox'
import FourOFour from "./FourOFour"


class Dashboard extends Component {
  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <div>
        {
        isAuthenticated() &&
        <section className="dashboard">
          <TripBox />
          <MailBox />
          <ChoiceBox />
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

export default Dashboard
