import React, { Component } from 'react'

import Category from './Category'
import { createCategoryStructure } from './utilities'

export default class Expense extends Component {
  render () {
    const { data, transformDate, displayCurrency } = this.props
    let categoriesJSON = createCategoryStructure(data)
    return (
      <div>
        {data &&
          <div className='Expense'>
            This is an Expense.
            {categoriesJSON.map((expense, idx) => {
              return (
                <Category
                  key={idx}
                  type={'expenses'}
                  data={expense}
                  displayCurrency={displayCurrency}
                  transformDate={transformDate}
                />
              )
            })}
          </div>}
      </div>
    )
  }
}
