import React, { Component } from 'react'
import handleErrors from '../objects/handleErrors'

class SentMail extends Component {
  constructor(){
    super()
    this.state = {
      mailArray: []
    }
  }

  componentDidMount() {
    const API = 'https://sitter-swap-api.herokuapp.com/api/v1/sent-messages/'
    let id = localStorage.getItem("user_id")
    fetch(API + id)
      .then(handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ mailArray: data
        })
    }).catch((error) => {
        console.log(error)
    })
  }

  render() {
    return(
      <article className="sent-mail format-table">
        <table>
          <thead>
            <tr>
              <th style={{width:"100px"}}>Date </th>
              <th style={{width:"100px"}}>To</th>
              <th style={{width:"150px"}}>Subject</th>
              <th style={{width:"450px"}}>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mailArray.map((mailObject) => {
              let date = mailObject.created_at.substring(0,10)
                    return(<tr key={mailObject.id}>
                            <td>{date}</td>
                            <td>{mailObject.first_name}</td>
                            <td>{mailObject.trip_name}</td>
                            <td>{mailObject.message}</td>
                          </tr>
                    )
                 })}
          </tbody>
        </table>
      </article>
    )
  }
}

export default SentMail
