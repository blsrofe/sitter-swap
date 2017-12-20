import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from './Home'
import NewMemberForm from './NewMemberForm'

class ContentPanel extends Component {
  render() {
    return(
      <HashRouter>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewMemberForm}/>
        </div>
      </HashRouter>
    )
  }
}

export default ContentPanel
