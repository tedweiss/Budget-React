import React, { Component } from 'react'

import Expense from './Expense'
import Budget from './Budget'
import Income from './Income'
import { displayCurrency } from './utilities'

export default class Month extends Component {
  constructor (props) {
    super(props)
    this.state = { type: 'budgets' }
  }

  calculateTotals = type => {
    let transType = this.props.month.transactionType[type]
    let total = 0
    if (transType) {
      transType.map(tran => {
        let amount = parseFloat(tran.amount)
        total += amount
      })
    }
    total = total.toFixed(2)
    return total
  }

  displayTransactionType = type => {
    let transType = {
      budgets: Budget,
      expenses: Expense,
      incomes: Income
    }
    let TransactionView = transType[type]
    return (
      <TransactionView
        data={this.props.month.transactionType[this.state.type]}
      />
    )
  }

  displayCategories = () => {
    let categories = []
    let transactionType = this.props.month.transactionType
    for (var key in transactionType) {
      if (transactionType.hasOwnProperty(key)) {
        categories.push(key)
      }
    }
  }

  render () {
    let stateType = this.state.type
    this.displayCategories()
    return (
      <div className='Month'>
        This is Month.
        <div>
          <span>Budget: </span><span>{displayCurrency(this.calculateTotals('budgets'))}</span>
        </div>
        <div>
          <span>Expense: </span><span>{displayCurrency(this.calculateTotals('expenses'))}</span>
        </div>
        <div>
          <span>Income: </span><span>{displayCurrency(this.calculateTotals('incomes'))}</span>
        </div>
        {/* switch types here */}
        <select
          defaultValue={this.state.type}
          onChange={event => {
            this.setState({ type: event.target.value })
          }}>
          <option value='' />
          <option value='budgets'>Budget</option>
          <option value='expenses'>Expense</option>
          <option value='incomes'>Income</option>
        </select>
        {this.displayTransactionType(stateType)}
      </div>
    )
  }
}
