import React, { Component } from 'react'

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
        <div>
          {data &&
            <div className='Income'>
              This is an Income.
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
            </div>}
        </div>
      )
    }
  }
}
