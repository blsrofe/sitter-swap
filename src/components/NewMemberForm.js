import React, { Component } from 'react'

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
    const userData = this.state//do we need both of these
    const postInfo = {userData}
    fetch('http://localhost:3000/api/v1/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInfo)
    })
    .then((response) => {
      console.log(response)
    })
  }

  render() {
    return(
      <section className="new-member-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Create Username: </label>
            <input name="username" type="text" onChange={this.handleChange} required/>
          <br></br>
          <br></br>
          <fieldset className="private-info">
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
          <select name="state" id="state" onChange={this.handleChange}>
            <option value="" selected="selected">Select a State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <br></br>
          <label htmlFor="email">Email: </label>
            <input name="email" type="email" onChange={this.handleChange} required/>
          <label htmlFor="phoneNumber">Phone: </label>
            <input name="phoneNumber" type="text" onChange={this.handleChange} required/>
          <br></br>
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
          <br></br>
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
          <label htmlFor="fencedYard">    Fenced Yard? </label>
            <input type="radio" name="fencedYard" value="true" onChange={this.handleChange} />Yes
            <input type="radio" name="fencedYard" value="false" onChange={this.handleChange}/>No
          <br></br>
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
