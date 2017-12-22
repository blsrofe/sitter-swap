import React, { Component } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom"
import NavBar from './components/NavBar'
import ContentPanel from './components/ContentPanel'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory()

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <ContentPanel />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
