import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Home from './Home'
import NewMemberForm from './NewMemberForm'
import UserProfileBoxes from './UserProfileBoxes'
import NewDogsForm from './NewDogsForm'
import Dashboard from './Dashboard'
import Login from './Login'
import NewTrip from './NewTrip'
import SitterRequests from './SitterRequests'
import UsersShow from './UsersShow'
import Logout from './Logout'
import Callback from '../objects/callback'
import Auth from '../objects/auth'

class ContentPanel extends Component {


  render() {
    const auth = new Auth()

    const handleAuthentication = (nextState, replace) => {
      if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
      }
    }
    return(
        <div className="content-panel">
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/new" render={()=><NewMemberForm passToParent={this.getLoggedStatus}/>}/>
          <Route path="/profile" render={(props) => <UserProfileBoxes auth={auth} {...props} />}/>
          <Route path="/users/:id/new-dog" component={NewDogsForm}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" render={()=><Login passToParent={this.getLoggedStatus}/>}/>
          <Route path="/logout" render={()=><Logout passToParent={this.getLoggedStatus}/>}/>
          <Route path="/users/:id/new-trip" component={NewTrip}/>
          <Route path="/requests" component={SitterRequests}/>
          <Route exact path="/users/:id" component={UsersShow}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
    )
  }
}

export default ContentPanel
