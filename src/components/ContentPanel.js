import React, { Component } from 'react'
import {Route} from "react-router-dom"
import Home from './Home'
import NewMemberBox from './NewMemberBox'

class ContentPanel extends Component {
  render() {
    return(
        <div className="content-panel">
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
          // <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewMemberBox}/>
        </div>
    )
  }
}

export default ContentPanel
