import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
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
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
      //if else passwords do not match if data nil? if data.id?
        let id = data.id
        let historyString = "/users/" + id + "/dashboard"
        history.push(historyString)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return(
      <article className="login-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
            <input name="username" type="text" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={this.handleChange} required/>
          <br></br>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </article>
    )
  }
}

export default Login