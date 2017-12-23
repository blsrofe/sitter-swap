import React, { Component } from 'react'
import history from '../objects/history'
import memberForm from '../objects/memberForm'
import handleErrors from '../objects/handleErrors'

class NewMemberForm extends Component {
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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const userData = this.state
    const postInfo = {userData}
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
        let id = data.id
        history.push('/new-dogs', { owner_id: {id} })//maybe, how do i see this variable
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return memberForm
  }
}

export default NewMemberForm
