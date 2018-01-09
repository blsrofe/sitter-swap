import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'

class PublicProfile extends Component {
  constructor(){
    super()
    this.state = {
      first_name: '',
      crossStreet1: '',
      crossStreet2: '',
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
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users-public/'
    let id = localStorage.getItem("user_id")
    fetch(API + id)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ first_name: data[0].first_name,
                        crossStreet1: data[0].cross_street1,
                        crossStreet2: data[0].cross_street2,
                        city: data[0].city,
                        state: data[0].state,
                        zip: data[0].zip,
                        residenceType: data[0].residence_type,
                        fencedYard: data[0].fenced_yard,
                        childrenUnderTwo: data[0].children_under_two,
                        otherChildren: data[0].other_children,
                        cats: data[0].cats,
                        profile: data[0].profile
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    return(
      <article className="users-show">
        <div className="show-box">
          <h2 className="header">{this.state.first_name}</h2>
          <p className="close"><span id="bold">City: </span>{this.state.city}</p>
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

export default PublicProfile
