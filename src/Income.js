import React, { Component } from 'react'

import AddEntry from './Entries/addEntry'

export default class Income extends Component {
  render () {
    const {
          data,
          transformDate,
          displayCurrency
        } = this.props
    if (!data) {
      return <div />
    } else {
      return (
        <div className='Income'>
          This is an Income.
          <AddEntry />
          {data.map((income, idx) => {
            return (
              <div key={idx}>
                <p>{income.year}</p>
                <p>{income.month}</p>
                <p>{displayCurrency(income.amount)}</p>
                <p>{transformDate(income.date)}</p>
                <p>{income.income_source}</p>
                <p>{income.whose_income}</p>
                <p>{income.notes}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
}
