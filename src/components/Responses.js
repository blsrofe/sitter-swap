import React, { Component } from 'react'
import FourOFour from "./FourOFour"
import handleErrors from '../objects/handleErrors'
import {NavLink} from "react-router-dom"
import history from '../objects/history'


class Responses extends Component {
  constructor(){
    super()
    this.state = {
      responseArray: []
    }
    this.viewProfile = this.viewProfile.bind(this)
    this.accept = this.accept.bind(this)
  }

  viewProfile = (event) => {
    event.preventDefault()

  }

  accept = (senderId, event) => {
    event.preventDefault()
    let API = 'https://sitter-swap-api.herokuapp.com/api/v1/trips/'
    let id = this.props.match.params.id
    let postInfo = {status: "accepted", accepter_id: senderId}
    fetch(API + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
        this.notifySender(senderId)
    }).catch((error) => {
      console.log(error)
    })
  }

  notifySender = (senderId) => {
    let id = Number(this.props.match.params.id)
    let messageText = "Congratulations! You have been accepted to dog sit for this trip!."
    let postInfo = {messageData: {tripId: id, message: messageText, recipientId: senderId, senderId: Number(localStorage.getItem("user_id")), responseToRequest: "false"}}
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
        history.push("/dashboard")
    }).catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/responses/'
    let id = this.props.match.params.id
    fetch(API + id)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ responseArray: data
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <div>
        {
        isAuthenticated() &&
        <div>
          <h3 className="response"><NavLink to={'/dashboard'}>Back To Dashboard</NavLink></h3>
          <section className="responses format-table">
            <h2>Responses For Your Request</h2>
            <table>
              <thead>
                <tr>
                  <th style={{width:"80px"}}>Name</th>
                  <th style={{width:"800px"}}>Message</th>
                </tr>
              </thead>
              <tbody>
                {this.state.responseArray.map((responseObject) => {
                        return(<tr key={responseObject.id}>
                                <td>{responseObject.first_name}</td>
                                <td>{responseObject.message}</td>
                                <td><button onClick={this.viewProfile}>Profile</button></td>
                                <td><button onClick={this.accept.bind(this, responseObject.sender_id)}>Accept</button></td>
                              </tr>
                        )
                     })}
              </tbody>
            </table>
          </section>
        </div>
        }

        {
        !isAuthenticated() &&
          <FourOFour />
        }
      </div>
    )
  }
}

export default Responses
