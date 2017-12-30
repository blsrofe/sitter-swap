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
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/trips')
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ dogsArray: data
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    return(
      <article className="all-trips">
        <h2>Sitter Requests</h2>
        <table>
          <thead>
            <tr>
              <th style={{width:"100px"}}>Trip Name</th>
              <th style={{width:"100px"}}>Requester</th>
              <th style={{width:"100px"}}>Start Date</th>
              <th style={{width:"100px"}}>End Date</th>
              <th style={{width:"60px"}}>Nights</th>
              <th style={{width:"525px"}}>Notes</th>
              <th style={{width:"100px"}}></th>
            </tr>
          </thead>
          <tbody>
            {this.state.tripsArray.map((tripObject) => {//need to add unique keys to this array
                    return(<tr>
                            <td>{tripObject.TripName}</td>
                            <td>{tripObject.user_id}</td>
                            <td>{tripObject.start_date}</td>
                            <td>{tripObject.end_date}</td>
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
