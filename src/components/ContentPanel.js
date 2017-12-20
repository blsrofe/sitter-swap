import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from './Home'

class ContentPanel extends Component {
  render() {
    return(
      <HashRouter>
        <div className="content">
          <Route exact path="/" component={Home}/>
        </div>
      </HashRouter>
    )
  }
}

export default ContentPanel
