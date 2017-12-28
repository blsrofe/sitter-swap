import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Home from './Home'
import NewMemberBox from './NewMemberBox'
import UserProfileBoxes from './UserProfileBoxes'
import NewDogsForm from './NewDogsForm'
import Dashboard from './Dashboard'


class ContentPanel extends Component {
  render() {
    return(
        <div className="content-panel">
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewMemberBox}/>
          <Route path="/users/:id/profile" component={UserProfileBoxes}/>
          <Route path="/users/:id/new-dog" component={NewDogsForm}/>
          <Route path="/users/:id/dashboard" component={Dashboard}/>
        </div>
    )
  }
}

export default ContentPanel
