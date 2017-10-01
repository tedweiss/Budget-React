import React, { Component } from 'react'

import MainApp from './MainApp'
import { testData } from './dataLoader'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { data: '' }
  }
  componentWillMount () {
    this.addData()
  }
  addData () {
    let data = testData.data()
    this.setState({ data: data })
  }
  render () {
    return (
      <MainApp years={this.state.data.years} />
    )
  }
}
