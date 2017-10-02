import React, { Component } from 'react'

import Month from './Month'

export default class Year extends Component {
  constructor (props) {
    super(props)
    this.state = { month: 8 }// new Date().getMonth() + 1 }
  }
  findMonthName = (monthNum) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[monthNum - 1]
  }
  findMonth = (num) => {
    let currentMonth = this.state.month
    let newMonth = currentMonth + num
    this.setState({month: newMonth})
  }
  render () {
    const {
          year
        } = this.props
    return (
      <div className='Year'>
        <p>This is {this.findMonthName(this.state.month)}.</p>
        <p>
          <button onClick={() => this.findMonth(-1)}>Prev</button>
          <button onClick={() => this.findMonth(1)}>Next</button>
        </p>
        {year.months.map((month, idx) => {
          if (month.month === this.state.month) {
            return <Month month={month} key={idx} />
          }
        })}
      </div>
    )
  }
}
