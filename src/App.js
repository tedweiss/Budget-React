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
    console.log('addData')
    console.log(testData)
    let data = testData.data()
    this.setState({ data: data })
  }
  render() {
    console.log('state: ', this.state)
    return (
      <div>
        {/*<Income data={this.state.data.transactions.incomes} />*/}
        {/*<Expense data={this.state.data.transactions.expenses} />*/}
        {/*<Budget data={this.state.data.transactions.budgets} />*/}
        <MainApp years={this.state.data.years} />
      </div>
    )
  }
}
