import { Component } from 'react'
import { setIdToken, setAccessToken } from '../objects/AuthService'

class Callback extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken()
    setIdToken()
    window.location.href = "/"
  }

  render() {
    return null
  }
}

export default Callback
