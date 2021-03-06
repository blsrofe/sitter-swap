import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'
import NewMemberForm from "./NewMemberForm"
import UserProfile from './UserProfile'
import DogInfoBox from './DogInfoBox'

class UserAccountDecision extends Component {
  constructor(){
    super()
    this.state = {
      id: '',
      paws: ''
    }
  }

  componentWillMount() {
    let email = localStorage.getItem("email")
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/account', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': email
      }
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({id: data.id, paws: data.paws})
        localStorage.setItem("user_id", data.id)
        localStorage.setItem("paws", data.paws)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    let passPaws = this.state.paws
    let passId = this.state.id

    let box
    if (this.state.id === "no") {
      box = (<NewMemberForm />)
    } else {
      box = (<section className="user-profile-box">
              <UserProfile id={passId} paws={passPaws}/>
              <DogInfoBox id={passId} paws={passPaws}/>
            </section>)
    }
    return(box)
  }
}

export default UserAccountDecision
