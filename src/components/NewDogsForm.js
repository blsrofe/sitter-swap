import React, { Component } from 'react'
import history from '../objects/history'
import handleErrors from '../objects/handleErrors'

//id={this.props.match.params.id} need to pass this in on DogInfoBox
//build api end

class NewDogsForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      sex: '',
      age: '',
      breed: '',
      notes: '',
      owner_id: ''
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
    fetch('https://sitter-swap-api.herokuapp.com/api/v1/dogs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    }).then(handleErrors)
      .then((response) => {
        return response.json()
    }).then((data) => {
        let id = data.owner_id
        let historyString = "users/" + id + "/profile"
        history.push(historyString)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return(
      <article className="new-dog-form">
        <h2> Tell Other Members About Your Dog!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
            <input name="name" type="text" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="breed">Breed: </label>
            <input name="breed" type="text" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="age">Age: </label>
            <input name="age" type="number" min="0" max="30" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="sex"></label>
            <input type="radio" name="sex" value="male" onChange={this.handleChange} />Male<br></br>
            <input type="radio" name="sex" value="female" onChange={this.handleChange}/>Female
          <br></br>
          <textarea cols="60" rows="3" name="notes" wrap="virtual" onChange={this.handleChange}>
            Additional Information
          </textarea>
          <br></br>
          <br></br>
          <button type="submit">Add Dog</button>
        </form>
      </article>
    )
  }
}

export default NewDogsForm
