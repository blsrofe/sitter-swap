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
import UsersShow from './UsersShow'
import Logout from './Logout'

class ContentPanel extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
  }

  // passUp = () => {
  //   let status = this.state.loggedIn
  //   this.props.passToParent(status)
  // }

  componentWillUpdate(nextProps, nextState) {
    let status = nextState.loggedIn
    if (nextState.loggedIn == true && this.state.loggedIn == false) {
      this.props.passToParent(status)
    }
  }

  getLoggedStatus = (dataFromChild) => {
    let status = localStorage.getItem('loggedIn')
    this.props.passToParent(status)
  }

  render() {
    return(
        <div className="content-panel">
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewMemberBox}/>
          <Route path="/users/:id/profile" component={UserProfileBoxes}/>
          <Route path="/users/:id/new-dog" component={NewDogsForm}/>
          <Route path="/users/:id/dashboard" component={Dashboard}/>
          <Route path="/login" render={()=><Login passToParent={this.getLoggedStatus}/>}/>
          <Route path="/logout" render={()=><Logout passToParent={this.getLoggedStatus}/>}/>
          <Route path="/users/:id/new-trip" component={NewTrip}/>
          <Route path="/requests" component={SitterRequests}/>
          <Route exact path="/users/:id" component={UsersShow}/>
        </div>
    )
  }
}

export default ContentPanel
