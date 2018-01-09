import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'
import FourOFour from "./FourOFour"


class NewTrip extends Component {
  constructor() {
    super()
    this.state = {
      tripName: '',
      startDate: '',
      endDate: '',
      numNights: '',
      notes: '',
      userId: localStorage.getItem("user_id")
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const tripData = this.state
    const postInfo = {tripData}
    const nights = this.state.numNights
    const paws = localStorage.getItem("paws")
    if(nights > paws) {
      alert("You do not have enough paws to make this request.")
    } else {
      fetch('https://sitter-swap-api.herokuapp.com/api/v1/trips', {
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
  }

  render() {
    const { isAuthenticated } = this.props.auth
    return(
      <div>
        {
        isAuthenticated() &&

        <article className="new-trip">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="tripName">Trip Name: </label>
              <input name="tripName" type="text" onChange={this.handleChange} required/>
            <br></br>
            <label htmlFor="startDate">Start Date: </label>
              <input name="startDate" type="date" onChange={this.handleChange} required/>
            <br></br>
            <label htmlFor="endDate">End Date: </label>
              <input name="endDate" type="date" onChange={this.handleChange} required/>
            <br></br>
            <label htmlFor="numNights">Number of Nights: </label>
              <input name="numNights" type="number" min="1" max="30" onChange={this.handleChange} required/>
            <br></br>
            <p>What are you looking for?</p>
            <textarea cols="60" rows="10" name="notes" wrap="virtual" onChange={this.handleChange}>
              Additional Information
            </textarea>
            <br></br>
            <br></br>
            <button type="submit">Make Trip Request</button>
          </form>
        </article>
        }

        {
        !isAuthenticated() &&
          <FourOFour />
        }
      </div>
    )
  }
}

export default NewTrip
