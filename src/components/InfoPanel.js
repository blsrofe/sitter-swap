import React, { Component } from 'react'
import InfoBox from './InfoBox'

const text1 = "Get started now!"
const text2 = "Earn one paw for every night you sit for another member."
const text3 = "Create a sitter request and spend one paw for every night a member watches your pooch."

class InfoPanel extends Component {
  render() {
    return(
      <section className="info-panel">
        <InfoBox number="1" title="Create An Account" text={text1}/>
        <InfoBox number="2" title="Earn Paws" text={text2}/>
        <InfoBox number="3" title="Spend Paws" text={text3}/>
      </section>
    )
  }
}

export default InfoPanel
