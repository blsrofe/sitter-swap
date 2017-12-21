import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from './Home'
import NewMemberBox from './NewMemberBox'

class ContentPanel extends Component {
  render() {
    return(
      <HashRouter>
        <div className="content-panel">
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewMemberBox}/>
        </div>
      </HashRouter>
    )
  }
}

export default ContentPanel
