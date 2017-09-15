import React, { Component } from 'react'

import Year from './Year'

export default class MainApp extends Component {
  constructor (props) {
    super(props)
    this.state = { year: '2016' }
  }
  render () {
    const {
          years
        } = this.props
    // data.sort(function (a, b) {
    //   if (a.category < b.category) return -1
    //   if (a.category > b.category) return 1
    //   return 0
    // })
    console.log('years: ', years)
    return (
      <div className='Year'>
        <p>This is {this.state.year}.</p>
        {years.map((year, idx) => {
          console.log(year['year'])
          if (year['year'] === this.state.year) {
            return <Year year={year} key={idx} />
          }
        })}
      </div>
    )
  }
}
