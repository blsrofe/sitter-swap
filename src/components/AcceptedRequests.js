import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'
import history from '../objects/history'

class AcceptedRequests extends Component {
  constructor(){
    super()
    this.state = {
      requestArray: []
    }
  }

  componentDidMount() {
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let id = localStorage.getItem("user_id")
    const requests = '/accepted'
    fetch(API + id + requests)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ requestArray: data
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  handleComplete(event, tripId, accepterId, numNights, accepterPaws) {
    event.preventDefault()
    this.changeStatus(tripId, accepterId, numNights, accepterPaws)
  }

  changeStatus = (tripId, accepterId, numNights, accepterPaws) => {
    let requesterId = localStorage.getItem("user_id")
    let API = 'https://sitter-swap-api.herokuapp.com/api/v1/trips/'
    let postInfo = {status: "completed", accepter_id: accepterId}
    fetch(API + tripId, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
        this.updateRequesterPaws(requesterId, numNights, accepterId, accepterPaws)
    }).catch((error) => {
      console.log(error)
    })
  }

  updateRequesterPaws = (requesterId, numNights, accepterId, accepterPaws) => {
    let paws = localStorage.getItem("paws")
    let updatedPaws = String(paws - numNights)
    console.log(updatedPaws)
    let API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let postInfo = {paws: updatedPaws}
    let pawString = "/paws"
    fetch(API + requesterId + pawString, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
      console.log(data)
        localStorage.setItem("paws", data.paws)
        this.addAccepterPaws(accepterId, numNights, accepterPaws)
    }).catch((error) => {
      console.log(error)
    })
  }

  addAccepterPaws = (accepterId, numNights, accepterPaws) => {
    let numPaws = Number(accepterPaws)
    let updatedPaws = String(numPaws + numNights)
    let pawString = "/paws"
    let API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let postInfo = {paws: updatedPaws}
    fetch(API + accepterId + pawString, {
      method: 'put',
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
    return(
      <article className="accepted-requests format-table">
        <table>
          <thead>
            <tr>
              <th style={{width:"110px"}}>Trip Name</th>
              <th style={{width:"100px"}}>Start Date</th>
              <th style={{width:"100px"}}>End Date</th>
              <th style={{width:"60px"}}>Nights</th>
              <th style={{width:"500px"}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requestArray.map((requestObject) => {
              let start = requestObject.start_date.substring(0,10)
              let end = requestObject.end_date.substring(0,10)
                    return(<tr key={requestObject.id}>
                            <td>{requestObject.trip_name}</td>
                            <td>{start}</td>
                            <td>{end}</td>
                            <td>{requestObject.num_nights}</td>
                            <td>{requestObject.notes}</td>
                            <td><button>Cancel</button></td>
                            <td><button onClick={(e) => this.handleComplete(e, requestObject.id, requestObject.accepter_id, requestObject.num_nights, requestObject.paws)}>Completed</button></td>
                          </tr>
                    )
                 })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default AcceptedRequests
