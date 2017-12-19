import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'

class ContentPanel extends Component {
  render() {
    return(
      <section className="content-panel">
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ContentPanel />
      </div>
    )
  }
}

export default App
