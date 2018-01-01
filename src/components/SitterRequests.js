import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'

class SitterRequests extends Component {
  constructor(){
    super()
    this.state = {
      tripsArray: []
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  //
  // handleClick(event) {
  //   event.preventDefault()
  //   let id = this.props.id
  //   let historyString = "/users/" + id + "/new-dog"
  //   history.push(historyString, { owner_id: 12 })
  // }

  componentDidMount() {
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/trips', {
      method: 'get',
      headers: {}
    })
    // fetch('https://sitter-swap-api.herokuapp.com/api/v1/trips')
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ tripsArray: data
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    return(
      <article className="all-trips format-table">
        <h2>Sitter Requests</h2>
        <table>
          <thead>
            <tr>
              <th style={{width:"110px"}}>Trip Name</th>
              <th style={{width:"110px"}}>Requester</th>
              <th style={{width:"110px"}}>Start Date</th>
              <th style={{width:"110px"}}>End Date</th>
              <th style={{width:"60px"}}>Nights</th>
              <th style={{width:"600px"}}>Notes</th>
              <th style={{width:"110px"}}></th>
            </tr>
          </thead>
          <tbody>
            {this.state.tripsArray.map((tripObject) => {//need to add unique keys to this array
              let start = tripObject.start_date.substring(0,10)
              let end = tripObject.end_date.substring(0,10)
                    return(<tr>
                            <td>{tripObject.trip_name}</td>
                            <td>{tripObject.username}</td>
                            <td>{start}</td>
                            <td>{end}</td>
                            <td>{tripObject.num_nights}</td>
                            <td>{tripObject.notes}</td>
                            <td><button>Apply</button></td>
                          </tr>
                    )
                 })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default SitterRequests
