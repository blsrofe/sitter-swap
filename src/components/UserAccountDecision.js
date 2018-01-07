import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'
import NewMemberForm from "./NewMemberForm"
import UserProfile from './UserProfile'
import DogInfoBox from './DogInfoBox'
import {NavLink} from "react-router-dom"

class UserAccountDecision extends Component {
  constructor(){
    super()
    this.state = {
      id: ''
    }
  }

  componentWillMount() {
    let email = localStorage.getItem("email")
    //http://localhost:3000
    //https://sitter-swap-api.herokuapp.com/api/v1/dogs
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
        this.setState({id: data.id})
        localStorage.setItem("user_id", data.id)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    let box
    if (this.state.id === "no") {
      box = (<NewMemberForm />)
    } else {
      box = (<section className="user-profile-box">
              <UserProfile />
              <DogInfoBox />
              <h1><NavLink to={'/dashboard'}>Visit Your Dashboard</NavLink></h1>
            </section>)
    }
    return(box)
  }
}

export default UserAccountDecision
