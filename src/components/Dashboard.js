import React, { Component } from 'react'
import TripBox from './TripBox'
import MailBox from './MailBox'
import ChoiceBox from './ChoiceBox'

class Dashboard extends Component {
  render() {
    return(
      <section className="dashboard">
        <TripBox id={this.props.match.params.id}/>
        <MailBox id={this.props.match.params.id}/>
        <ChoiceBox id={this.props.match.params.id}/>
      </section>
    )
  }
}

export default Dashboard
