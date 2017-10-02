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
    return (
      <div className='main-app'>
        <p>This is {this.state.year}.</p>
        {years.map((year, idx) => {
          if (year['year'] === this.state.year) {
            return <Year year={year} key={idx} />
          }
        })}
      </div>
    )
  }
}
