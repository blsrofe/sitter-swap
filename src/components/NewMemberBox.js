import React, { Component } from 'react'
import NewMemberForm from './NewMemberForm'

class NewMemberBox extends Component {
  render() {
    return(
      <section className="new-member-box">
        <NewMemberForm />
      </section>    
    )
  }
}

export default NewMemberBox
