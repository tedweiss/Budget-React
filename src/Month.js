import React, { Component } from 'react'

import Expense from './Expense'
import Budget from './Budget'
import Income from './Income'

export default class Month extends Component {
  constructor (props) {
    super(props)
    this.state = { type: 'incomes' }
    this.transformDate = this.transformDate.bind(this)
    this.displayCurrency = this.displayCurrency.bind(this)
  }

  calculateTotals (type) {
    let transType = this.props.month.transactionType[type]
    let total = 0
    if (transType) {
      transType.map((tran) => {
        let amount = parseFloat(tran.amount)
        total += amount
      })
    }
    total = total.toFixed(2)
    return total
  }

  displayCurrency (amount) {
    if (amount < 0) {
      amount = '-$' + this.createNumberWithCommas(amount)
    } else {
      amount = '$' + this.createNumberWithCommas(amount)
    }
    return amount
  }

  transformDate (date) {
    var newDay = date.slice(8, 10)
    var newMonth = date.slice(5, 7)
    var newYear = date.slice(2, 4)
    newDay = this.checkSingleDigitDate(newDay)
    newMonth = this.checkSingleDigitDate(newMonth)
    var newDate = newMonth + '/' + newDay + '/' + newYear
    return newDate
  }

  checkSingleDigitDate (date) {
    if (date.indexOf(0) === 0) {
      date = date.slice(1)
    }
    return date
  }

  displayTransactionType (type) {
    let transType = {
      budgets: Budget,
      expenses: Expense,
      incomes: Income
    }
    let TransactionView = transType[type]
    return <TransactionView data={this.props.month.transactionType[this.state.type]} transformDate={this.transformDate} displayCurrency={this.displayCurrency} />
  }

  displayCategories () {
    let categories = []
    let transactionType = this.props.month.transactionType
    for (var key in transactionType) {
      if (transactionType.hasOwnProperty(key)) {
        categories.push(key)
        console.log(transactionType[key])
      }
    }
    // for (var i = 0; i < this.props.month.transactionType.length; i++) {
    //   if (categories.indexOf(this.props.month.transactionType[i].category) < 0) {
    //     categories.push(this.props.month.transactionType[i].category)
    //   }
    // }
    console.log(categories)
  }

  createNumberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render () {
    let stateType = this.state.type
    console.log(this.props.month)
    this.displayCategories()
    return (
      <div className='Month'>
        This is Month.
        <div>
          <span>Budget: </span><span>{this.displayCurrency(this.calculateTotals('budgets'))}</span>
        </div>
        <div>
          <span>Expense: </span><span>{this.displayCurrency(this.calculateTotals('expenses'))}</span>
        </div>
        <div>
          <span>Income: </span><span>{this.displayCurrency(this.calculateTotals('incomes'))}</span>
        </div>
        {/*switch types here*/}
        <select defaultValue={this.state.type}
          onChange={(event) => {
            this.setState({type: event.target.value})
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
