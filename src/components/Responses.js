import React, { Component } from 'react'
import FourOFour from "./FourOFour"
import handleErrors from '../objects/handleErrors'
import {NavLink} from "react-router-dom"

class Responses extends Component {
  constructor(){
    super()
    this.state = {
      id: '',
      responseArray: []
    }
    this.viewProfile = this.viewProfile.bind(this)
    this.accept = this.accept.bind(this)
  }

  viewProfile = (event) => {
    event.preventDefault()

  }

  accept = (firstName, event) => {
    event.preventDefault()
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
                  <th style={{width:"130px"}}>Message</th>
                </tr>
              </thead>
              <tbody>
                {this.state.responseArray.map((responseObject) => {
                        return(<tr key={responseObject.id}>
                                <td>{responseObject.first_name}</td>
                                <td>{responseObject.message}</td>
                                <td><button onClick={this.viewProfile}>View User</button></td>
                                <td><button onClick={this.accept.bind(this, responseObject.first_name)}>Accept</button></td>//want id of accepted user
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
