import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'

class CurrentRequests extends Component {
  constructor(){
    super()
    this.state = {
      requestArray: []
    }
  }

  componentDidMount() {
    //http://localhost:3000
    //https://sitter-swap-api.herokuapp.com
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let id = localStorage.getItem("user_id")
    const requests = '/requests'
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

  render() {
    return(
      <article className="current-requests format-table">
        <table>
          <thead>
            <tr>
              <th style={{width:"110px"}}>Trip Name</th>
              <th style={{width:"100px"}}>Start Date</th>
              <th style={{width:"100px"}}>End Date</th>
              <th style={{width:"60px"}}>Nights</th>
              <th style={{width:"170px"}}>Notes</th>
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
                            <td><button>Responses</button></td>
                            <td><button>Update</button></td>
                            <td><button>Cancel</button></td>
                          </tr>
                    )
                 })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default CurrentRequests
