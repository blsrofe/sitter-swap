import React, { Component } from 'react'

class DogInfoBox extends Component {
  //name 15
  //breed 20
  //notes 70

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
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <button>Add Dog</button>
      </article>
    )
  }
}

export default DogInfoBox
