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
          <Route path="/profile" render={(props) => <UserProfileBoxes auth={auth} {...props} />}/>
          <Route path="/new-dog" render={(props) => <NewDogsForm auth={auth} {...props} />}/>
          <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />}/>
          <Route path="/new-trip" render={(props) => <NewTrip auth={auth} {...props} />}/>
          <Route path="/requests" render={(props) => <SitterRequests auth={auth} {...props} />}/>
          <Route path="/public/:id" render={(props) => <UsersShow auth={auth} {...props} />}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
    )
  }
}

export default ContentPanel
