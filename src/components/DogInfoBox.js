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

  handleClick(event) {
    event.preventDefault()
    let id = this.props.id
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
      .catch((error) => {
        console.log(error)
    })
  }

  componentDidMount() {
    //http://localhost:3000
    //https://sitter-swap-api.herokuapp.com
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/users/'
    let id = this.props.id
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
    return(
      <article className="dog-info-box">
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
      </article>
    )
  }
}

export default DogInfoBox
