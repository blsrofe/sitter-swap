import React, { Component } from 'react'
import FourOFour from "./FourOFour"
import handleErrors from '../objects/handleErrors'
import history from '../objects/history'

class Apply extends Component {
  constructor() {
    super()
    this.state = {
      tripId: '',
      message: '',
      recipientId: '',
      responseToRequest: "true",
      senderId: Number(localStorage.getItem("user_id"))
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const trip = Number(this.props.match.params.id)
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/trip-owner/'
    fetch(API + trip)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({recipientId: data[0].user_id, tripId: trip})
    }).catch((error) => {
        console.log(error)
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const messageData = this.state
    const postInfo = {messageData}
    //http://localhost:3000
    //https://sitter-swap-api.herokuapp.com/api/v1/dogs
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

  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <div>
        {
        isAuthenticated() &&
        <section className="apply-form">
          <h2> Send a Message to the Sitter Requester</h2>
          <form onSubmit={this.handleSubmit}>
            <textarea cols="80" rows="8" name="message" wrap="virtual" onChange={this.handleChange}>
              Do not forget to provide a way for the sitter requester to contact you.
            </textarea>
            <br></br>
            <br></br>
            <button type="submit">Apply</button>
          </form>
        </section>
        }

        {
        !isAuthenticated() &&
          <FourOFour />
        }
      </div>
    )
  }
}

export default Apply
