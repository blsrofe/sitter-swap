import React, { Component } from 'react'

const handleErrors = (response) => {
  if(!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export default handleErrors
