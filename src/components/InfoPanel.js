import React, { Component } from 'react'
import InfoBox from './InfoBox'

class InfoPanel extends Component {
  render() {
    return(
      <section className="info-panel">
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </section>
    )
  }
}

export default InfoPanel
