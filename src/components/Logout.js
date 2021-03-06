import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'

class Logout extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    //https://sitter-swap-api.herokuapp.com/api/v1/users/
    //http://localhost:3000/api/v1/logout
    let id = localStorage.getItem("id")
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/logout', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    }).then(handleErrors)
    .then(response => response.json())
    .then((data) => {
      this.setState({ loggedIn: "false" })
      localStorage.setItem('loggedIn', "false")
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('id')
      this.props.passToParent("false")
      history.push('/')
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    return(
      <section className="logout">
        <p>Logging Out...</p>
      </section>
    )
  }
}

export default Logout
