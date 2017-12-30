import React, { Component } from 'react'

class MainPicture extends Component {
  render() {
    return(
      <article className="main-picture">
        <img src={require('../images/dk.png')} id="main-pic" alt="two dogs" />
      </article>
    )
  }
}

export default MainPicture
