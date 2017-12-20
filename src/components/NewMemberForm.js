import React, { Component } from 'react'


class NewMemberForm extends Component {
  constructor(){
    super()
    this.state = {
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
          <label htmlFor="firstName">First Name: </label>
            <input name="firstName" type="text" onChange={this.handleChange}/>
          <label htmlFor="lastName">Last Name: </label>
            <input name="lastName" type="text" onChange={this.handleChange}/>
          <label htmlFor="street">Street Address: </label>
            <input name="street" type="text" onChange={this.handleChange}/>
          <label htmlFor="city">City: </label>
            <input name="city" type="text" onChange={this.handleChange}/>
          <label htmlFor="state">State: </label>
            <input name="state" type="text" onChange={this.handleChange}/>
          <label htmlFor="zip">Zip: </label>
            <input name="zip" type="text" onChange={this.handleChange}/>
          <label htmlFor="crossStreet1">First Major Cross Street: </label>
            <input name="crossStreet1" type="text" onChange={this.handleChange}/>
          <label htmlFor="crossStreet2">Second Major Cross Street: </label>
            <input name="crossStreet2" type="text" onChange={this.handleChange}/>
          <label htmlFor="email">Email: </label>
            <input name="email" type="text" onChange={this.handleChange}/>
          <label htmlFor="phoneNumber">Phone: </label>
            <input name="phoneNumber" type="text" onChange={this.handleChange}/>
          <label htmlFor="residenceType">Residence Type: </label>
            <input name="residenceType" type="text" onChange={this.handleChange}/>
          <label htmlFor="fencedYard">Fenced Yard? </label>
            <input name="fencedYard" type="text" onChange={this.handleChange}/>
          <label htmlFor="childrenUnderTwo">Children Under The Age Of 2: </label>
            <input name="childrenUnderTwo" type="text" onChange={this.handleChange}/>
          <label htmlFor="otherChildren">Children Between 2-12: </label>
            <input name="otherChildren" type="text" onChange={this.handleChange}/>
          <label htmlFor="cats">Do You Have Cats?</label>
            <input name="cats" type="text" onChange={this.handleChange}/>
          <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={this.handleChange}/>
          <label htmlFor="profile">Profile: </label>
            <input name="profile" type="text" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  }
}

export default NewMemberForm
