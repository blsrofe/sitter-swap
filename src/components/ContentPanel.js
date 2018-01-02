import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Home from './Home'
import NewMemberBox from './NewMemberBox'
import UserProfileBoxes from './UserProfileBoxes'
import NewDogsForm from './NewDogsForm'
import Dashboard from './Dashboard'
import Login from './Login'
import NewTrip from './NewTrip'
import SitterRequests from './SitterRequests'

class ContentPanel extends Component {
  render() {
    return(
        <div className="content-panel">
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewMemberBox}/>
          <Route path="/users/:id/profile" component={UserProfileBoxes}/>
          <Route path="/users/:id/new-dog" component={NewDogsForm}/>
          <Route path="/users/:id/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/users/:id/new-trip" component={NewTrip}/>
          <Route path="/requests" component={SitterRequests}/>
        </div>
    )
  }
}

export default ContentPanel
