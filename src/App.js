import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ContentPanel from './components/ContentPanel'

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
