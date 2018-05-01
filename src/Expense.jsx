import React, { Component } from 'react'

import Category from './Category'
import { createCategoryStructure } from './utilities'

export default class Expense extends Component {
  render () {
    const { data } = this.props
    let categoriesJSON = createCategoryStructure(data)
    return (
      <div>
        {data &&
          <div className='Expense'>
            This is an Expense.
            {categoriesJSON.map((expense, idx) => {
              return <Category key={idx} type={'expenses'} data={expense} />
            })}
          </div>}
      </div>
    )
  }
}
