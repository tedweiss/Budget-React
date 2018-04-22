import React, { Component } from 'react'

import Category from './Category'
import { createCategoryStructure } from './utilities'

export default class Expense extends Component {
  render () {
    let categoriesJSON = createCategoryStructure(this.props.data)
    const { data, displayCurrency } = this.props
    if (data) {
      data.sort(function (a, b) {
        if (a.category < b.category) return -1
        if (a.category > b.category) return 1
        return 0
      })
    }
    return (
      <div>
        {data &&
          <div className='Budget'>
            This is Budget.
            {categoriesJSON.map((category, idx) => {
              return <Category key={idx} data={category} displayCurrency={displayCurrency} />
            })}
          </div>}
      </div>
    )
  }
}
