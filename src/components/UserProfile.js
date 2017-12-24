import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'

class UserProfile extends Component {

  //const id = this.props.params.id//I think this is how I grab the user id this.props.match.params.id
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
      profile: ''
    }
  }

  componentDidMount() {
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let id = this.props.id
    fetch(API + id)
      .then(handleErrors)
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
        <h2>Your Information</h2>
      </article>
    )
  }
}

export default UserProfile
