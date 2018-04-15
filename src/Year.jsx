import React, { Component } from 'react'

import Month from './Month'
import * as data from './data'

export default class Year extends Component {
  constructor () {
    super()
    this.state = { month: new Date().getMonth() + 1, monthData: '' }
  }
  componentDidMount () {
    this.setState({ monthData: data[this.findMonthName(this.state.month)] })
  }
  findMonthName = monthNum => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return months[monthNum - 1]
  }
  findMonth = num => {
    let currentMonth = this.state.month
    let newMonth = currentMonth + num
    this.setState({ month: newMonth, monthData: data[this.findMonthName(newMonth)] })
  }
  render () {
    return (
      <div className='Year'>
        <p>This is {new Date().getFullYear()}.</p>
        <p>This is {this.findMonthName(this.state.month)}.</p>
        <p>
          <button onClick={() => this.findMonth(-1)}>Prev</button>
          <button onClick={() => this.findMonth(1)}>Next</button>
        </p>
        {this.state.monthData && <Month month={this.state.monthData} />}
      </div>
    )
  }
}
