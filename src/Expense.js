import React, { Component } from 'react'

export default class Expense extends Component {
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
        <div className='Expense'>
          This is an Expense.
          {data.map((expense, idx) => {
            return (
              <div key={idx}>
                <p>{expense.year}</p>
                <p>{expense.month}</p>
                <p>{displayCurrency(expense.amount)}</p>
                <p>{transformDate(expense.date)}</p>
                <p>{expense.category}</p>
                <p>{expense.subcategory}</p>
                <p>{expense.payee}</p>
                <p>{expense.notes}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
}
