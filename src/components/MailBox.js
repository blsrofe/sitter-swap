import React, { Component } from 'react'
import SentMail from './SentMail'
import ReceivedMail from './ReceivedMail'
import {NavLink} from "react-router-dom"
import {Route} from "react-router-dom"

class MailBox extends Component {
  constructor(){
    super()
    this.state = {
      contentToShow: 'received'
    }
    this.getReceived = this.getReceived.bind(this)
    this.getSent = this.getSent.bind(this)
  }

  getSent = (event) => {
    event.preventDefault()
    this.setState({ contentToShow: "sent" })
  }

  getReceived = (event) => {
    event.preventDefault()
    this.setState({ contentToShow: "received" })
  }

  render() {
    let mailboxContent
    if(this.state.contentToShow === "sent") {
      mailboxContent = <SentMail />
    }else if(this.state.contentToShow === "received") {
      mailboxContent = <ReceivedMail />
    }
    return(
      <article className="mailbox">
        <ul className="mailbox-header">
          <li><h3 onClick={this.getReceived}>Inbox</h3></li>
          <li><h3 onClick={this.getSent}>Sent Mail</h3></li>
        </ul>
        <div className="mailbox-content">
          {mailboxContent}
        </div>
      </article>
    )
  }
}

export default MailBox
