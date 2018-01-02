import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'

class PublicDogInfoBox extends Component {
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
  }

  handleClick(event) {
    event.preventDefault()
    let id = this.props.id
    let historyString = "/users/" + id + "/new-dog"
    history.push(historyString, { owner_id: 12 })
  }

  componentDidMount() {
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
      <article className="public-dog-info-box">
        <h2>Dog Information</h2>
        <table>
          <thead>
            <tr>
              <th style={{width:"80px"}}>Name</th>
              <th style={{width:"40px"}}>Age</th>
              <th style={{width:"100px"}}>Breed</th>
              <th style={{width:"40px"}}>Sex</th>
              <th style={{width:"130px"}}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dogsArray.map((dogObject) => {//need to add unique keys to this array
                    return(<tr>
                            <td>{dogObject.name}</td>
                            <td>{dogObject.age}</td>
                            <td>{dogObject.breed}</td>
                            <td>{dogObject.sex}</td>
                            <td>{dogObject.notes}</td>
                          </tr>
                    )
                 })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default PublicDogInfoBox
