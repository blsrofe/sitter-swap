import React, { Component } from 'react'

class InfoBox extends Component {
  render() {
    return(
      <article className="info-box">
        <h4>{this.props.title}</h4>
        <p className="number">{this.props.number}</p>
        <p id="box-text">{this.props.text}</p>
        <button>More Info</button>
      </article>
    )
  }
}

export default InfoBox
