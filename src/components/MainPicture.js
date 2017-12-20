import React, { Component } from 'react'

class MainPicture extends Component {
  render() {
    return(
      <article className="main-picture">
        <img src={require('../images/d_and_k.jpg')} id="main-pic" alt="two dogs" />
      </article>
    )
  }
}

export default MainPicture
