import React, { Component } from 'react'
import MainPicture from './MainPicture'
import MainText from './MainText'
import InfoPanel from './InfoPanel'

class Home extends Component {
  render() {
    return(
      <section className="home">
        <MainPicture />
        <MainText />
        <h2 id="get-started">Get Started In Three Easy Steps!</h2>
        <InfoPanel />
      </section>
    )
  }
}

export default Home
