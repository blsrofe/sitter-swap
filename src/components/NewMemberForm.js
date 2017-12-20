import React, { Component } from 'react'


class NewMemberForm extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
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
          <label htmlFor="username">Username: </label>
            <input name="username" type="text" onChange={this.handleChange}/>
          <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  }
}

export default NewMemberForm
