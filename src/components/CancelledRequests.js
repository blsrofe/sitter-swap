import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'

class CanceledRequests extends Component {
  constructor(){
    super()
    this.state = {
      requestArray: []
    }
  }

  componentDidMount() {
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let id = this.props.id
    const requests = '/requests/cancelled'
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
      <article className="cancelled-requests format-table">
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
            {this.state.requestArray.map((requestObject) => {//need to add unique keys to this array
              let start = requestObject.start_date.substring(0,10)
              let end = requestObject.end_date.substring(0,10)
                    return(<tr>
                            <td>{requestObject.trip_name}</td>
                            <td>{start}</td>
                            <td>{end}</td>
                            <td>{requestObject.num_nights}</td>
                            <td>{requestObject.notes}</td>
                          </tr>
                    )
                 })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default CanceledRequests
