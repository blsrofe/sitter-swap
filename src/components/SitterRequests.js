import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'
import {NavLink} from "react-router-dom"
import FourOFour from "./FourOFour"

class SitterRequests extends Component {
  constructor(){
    super()
    this.state = {
      tripsArray: []
    }
  }

  componentDidMount() {
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/trips')
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
    const { isAuthenticated } = this.props.auth
    return(
      <div>
        {
        isAuthenticated() &&
          <div>
          <article className="all-trips format-table">
          <h2>Sitter Requests</h2>
          <table>
            <thead>
              <tr>
                <th style={{width:"110px"}}>Trip Name</th>
                <th style={{width:"110px"}}>Requester</th>
                <th style={{width:"110px"}}>Start Date</th>
                <th style={{width:"110px"}}>End Date</th>
                <th style={{width:"80px"}}>Nights</th>
                <th style={{width:"100px"}}>Zip Code</th>
                <th style={{width:"350px"}}>Notes</th>
                <th style={{width:"60px"}}></th>
                <th style={{width:"60px"}}></th>
              </tr>
            </thead>
            <tbody>
              {this.state.tripsArray.map((tripObject) => {
                let start = tripObject.start_date.substring(0,10)
                let end = tripObject.end_date.substring(0,10)
                let requestShow = "/public/" + tripObject.user_id
                let apply = "/apply/" + tripObject.id
                return(<tr key={tripObject.id}>
                  <td>{tripObject.trip_name}</td>
                  <td>{tripObject.first_name}</td>
                  <td>{start}</td>
                  <td>{end}</td>
                  <td>{tripObject.num_nights}</td>
                  <td>{tripObject.zip}</td>
                  <td>{tripObject.notes}</td>
                  <td><button><NavLink to={requestShow}>View</NavLink></button></td>
                  <td><button><NavLink to={apply}>Apply</NavLink></button></td>
              </tr>)
              })}
            </tbody>
          </table>
          </article>
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

export default SitterRequests
