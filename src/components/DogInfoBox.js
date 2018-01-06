import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'

class DogInfoBox extends Component {
  //name 15
  //breed 20
  //notes 70
  constructor(){
    super()
    this.state = {
      owner_id: '',
      name: '',
      breed: '',
      sex: '',
      age: '',
      notes: '',
      dogsArray: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.deleteDog = this.deleteDog.bind(this)
    this.editDog = this.editDog.bind(this)
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
        this.setState({owner_id: data.id})
    }).catch((error) => {
      console.log(error)
    })
  }

  handleClick(event) {
    event.preventDefault()
    let id = localStorage.getItem("user_id")
    let historyString = "/users/" + id + "/new-dog"
    history.push(historyString)
  }

  editDog = (event) => {
    event.preventDefault()

  }

  deleteDog = (id, event) => {
    event.preventDefault()
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/dogs/'
    fetch(API + id, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(handleErrors)
      .then(()=> {
        this.fetchDogs()
      })
      .catch((error) => {
        console.log(error)
    })
  }

  componentDidMount() {
    this.fetchDogs()
  }

  fetchDogs = () => {
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let id = this.state.owner_id
    const dogs = '/dogs'
    fetch(API + id + dogs)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ dogsArray: data
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    let box
    if (this.state.owner_id === "no") {
      box = (<article className="dog-info-box">
              <h2> Create a profile to enter dog information</h2>
            </article>)
    } else {
      box = (<article className="dog-info-box">
              <h2>Your Dogs</h2>
              <table>
                <thead>
                  <tr>
                    <th style={{width:"80px"}}>Name</th>
                    <th style={{width:"40px"}}>Age</th>
                    <th style={{width:"100px"}}>Breed</th>
                    <th style={{width:"40px"}}>Sex</th>
                    <th style={{width:"130px"}}>Notes</th>
                    <th style={{width:"60px"}}></th>
                    <th style={{width:"60px"}}></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.dogsArray.map((dogObject) => {
                          return(<tr key={dogObject.id}>
                                  <td>{dogObject.name}</td>
                                  <td>{dogObject.age}</td>
                                  <td>{dogObject.breed}</td>
                                  <td>{dogObject.sex}</td>
                                  <td>{dogObject.notes}</td>
                                  <td><button onClick={this.editDog}>Edit</button></td>
                                  <td><button onClick={this.deleteDog.bind(this, dogObject.id)}>Delete</button></td>
                                </tr>
                          )
                       })}
                </tbody>
              </table>
              <button onClick={this.handleClick}>Add Dog</button>
            </article>)}
    return(box)
  }
}

export default DogInfoBox
