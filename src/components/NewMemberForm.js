import React, { Component } from 'react'
import states from '../objects/states'

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
    const { username, password } = this.state //change name of this varible to newMemberInfo
    //axios.post('/new-user', { username, password }).then(response => response)use fetch here
  }

  render() {
    return(
      <section className="content-panel">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Create Username: </label>
            <input name="username" type="text" onChange={this.handleChange} required/>
          <br></br>
          <br></br>
          <fieldset>
          <legend>This information will not be visible to other members</legend>
          <label htmlFor="firstName">First Name: </label>
            <input name="firstName" type="text" onChange={this.handleChange} required/>
          <label htmlFor="lastName">Last Name: </label>
            <input name="lastName" type="text" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="street">Street Address: </label>
            <input name="street" type="text" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="city">City: </label>
            <input name="city" type="text" onChange={this.handleChange} required/>
          {states}
          <label htmlFor="email">Email: </label>
            <input name="email" type="email" onChange={this.handleChange} required/>
          <label htmlFor="phoneNumber">Phone: </label>
            <input name="phoneNumber" type="tel" onChange={this.handleChange} required/>
          <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={this.handleChange} required/>
          <br></br>
          </fieldset>
          <br></br>
          <label htmlFor="zip">Zip: </label>
            <input name="zip" type="text" onChange={this.handleChange} required/>
          <br></br>
          <label htmlFor="crossStreet1">First Major Cross Street: </label>
            <input name="crossStreet1" type="text" onChange={this.handleChange} required/>
          <label htmlFor="crossStreet2">Second Major Cross Street: </label>
            <input name="crossStreet2" type="text" onChange={this.handleChange} required/>
          <br></br>
          <select name="residenceType" onChange={this.handleChange}>
            <option value="" selected="selected">Residence Type</option>
            <option value="house">House</option>
            <option value="apt">Apartment</option>
            <option value="townhome">Townhome</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="fencedYard">Fenced Yard? </label>
            <input type="radio" name="fencedYard" value="true" onChange={this.handleChange} />Yes
            <input type="radio" name="fencedYard" value="false" onChange={this.handleChange}/>No
          <br></br>
          <label htmlFor="childrenUnderTwo">Children Under The Age Of 2: </label>
            <input name="childrenUnderTwo" type="number" min="0" max="10" onChange={this.handleChange}/>
          <label htmlFor="otherChildren">Children Between 2-12: </label>
            <input name="otherChildren" type="number" min="0" max="10" onChange={this.handleChange}/>
          <br></br>
          <label htmlFor="cats">Do You Have Cats?</label>
            <input type="radio" name="cats" value="true" onChange={this.handleChange} />Yes
            <input type="radio" name="cats" value="false" onChange={this.handleChange}/>No
          <br></br>
          <br></br>
          <label htmlFor="profile">Profile: </label>
          <br></br>
          <textarea cols="60" rows="7" name="profile" wrap="virtual" onChange={this.handleChange}>
            Tell others about you and your dogs!
          </textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  }
}

export default NewMemberForm
