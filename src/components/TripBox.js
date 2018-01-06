import React, { Component } from 'react'
import CurrentRequests from './CurrentRequests'
import CompletedRequests from './CompletedRequests'
import CancelledRequests from './CancelledRequests'
import AcceptedRequests from './AcceptedRequests'
import {NavLink} from "react-router-dom"
import {Route} from "react-router-dom"

class TripBox extends Component {
  constructor(){
    super()
    this.state = {
      contentToShow: 'active'
    }
    this.setActive = this.setActive.bind(this)
    this.setCancelled = this.setCancelled.bind(this)
    this.setCompleted = this.setCompleted.bind(this)
    this.setAccepted = this.setAccepted.bind(this)
  }

  setActive = (event) => {
    event.preventDefault()
    this.setState({ contentToShow: "active" })
  }

  setCancelled = (event) => {
    event.preventDefault()
    this.setState({ contentToShow: "cancelled" })
  }

  setCompleted = (event) => {
    event.preventDefault()
    this.setState({ contentToShow: "completed" })
  }

  setAccepted = (event) => {
    event.preventDefault()
    this.setState({ contentToShow: "accepted" })
  }

  render() {
    let tripboxContent
    if(this.state.contentToShow === "active") {
      tripboxContent = <CurrentRequests />
    }else if(this.state.contentToShow === "cancelled") {
      tripboxContent = <CancelledRequests />
    }else if(this.state.contentToShow === "completed") {
      tripboxContent = <CompletedRequests />
    }else if(this.state.contentToShow === "accepted") {
      tripboxContent = <AcceptedRequests />
    }
    return(
      <article className="tripbox">
        <ul className="tripbox-header">
          <li><h3 onClick={this.setActive}>Active</h3></li>
          <li><h3 onClick={this.setCancelled}>Cancelled</h3></li>
          <li><h3 onClick={this.setCompleted}>Completed</h3></li>
          <li><h3 onClick={this.setAccepted}>Accepted</h3></li>
        </ul>
        <div className="tripbox-content">
          {tripboxContent}
        </div>
      </article>
    )
  }
}

export default TripBox
