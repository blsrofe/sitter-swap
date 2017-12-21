import React, { Component } from 'react'
import './App.css'
import {HashRouter} from "react-router-dom"
import NavBar from './components/NavBar'
import ContentPanel from './components/ContentPanel'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar />
          <ContentPanel />
        </div>
      </HashRouter>
    )
  }
}

export default App
