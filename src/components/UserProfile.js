import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'

class UserProfile extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      crossStreet1: '',
      crossStreet2: '',
      email: '',
      phoneNumber: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      residenceType: '',
      fencedYard: '',
      childrenUnderTwo: '',
      otherChildren: '',
      cats: '',
      profile: '',
      token: localStorage.getItem("token")
    }
  }

  componentDidMount() {
    //http://localhost:3000
    //https://sitter-swap-api.herokuapp.com
    const API = 'http://localhost:3000/api/v1/users/'
    let id = this.props.id
    let token = this.state.token
    let username = localStorage.getItem("username")
    let authString = token + " " + username

    fetch(API + id, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : authString
      }
    }).then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ username: data.username,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        crossStreet1: data.cross_street1,
                        crossStreet2: data.cross_street2,
                        email: data.email,
                        phoneNumber: data.phone_number,
                        street: data.street,
                        city: data.city,
                        state: data.state,
                        zip: data.zip,
                        residenceType: data.residence_type,
                        fencedYard: data.fenced_yard,
                        childrenUnderTwo: data.children_under_two,
                        otherChildren: data.other_children,
                        cats: data.cats,
                        profile: data.profile
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    return(
      <article className="user-profile">
        <h2>Information About {this.state.username}</h2>
        <div className="personal-info">
          <p className="close">{this.state.firstName + " " + this.state.lastName}</p>
          <p className="close">{this.state.street}</p>
          <p className="close">{this.state.city + ", " + this.state.state + "  " + this.state.zip}</p>
          <p>{this.state.email}</p>
          <p>{this.state.phoneNumber}</p>
        </div>
        <br></br>
        <h3>The information below is visible to other members</h3>
        <br></br>
        <div className="personal-info2">
          <p className="close"><span id="bold">Major Cross Streets: </span>{this.state.crossStreet1 + " and " + this.state.crossStreet2}</p>
          <p className="close"><span id="bold">Zip Code: </span>{this.state.zip}</p>
          <p><span id="bold">Residence Type: </span>{this.state.residenceType}</p>
          <p className="inline"><span id="bold">Fenced Yard: </span>{this.state.fencedYard}</p>
          <p className="close"><span id="bold">Cats: </span>{this.state.cats}</p>
          <p className="close"><span id="bold">Children Under 2: </span>{this.state.childrenUnderTwo}</p>
          <p className="inline"><span id="bold">Children Between 2-12: </span>{this.state.otherChildren}</p>
          <br></br>
          <p>{this.state.profile}</p>
        </div>
      </article>
    )
  }
}

export default UserProfile
