import React, { Component } from 'react'
import CurrentRequests from './CurrentRequests'


class TripBox extends Component {
  render() {
    return(
      <article className="tripbox">
        <CurrentRequests id={this.props.id}/>
      </article>
    )
  }
}

export default TripBox
