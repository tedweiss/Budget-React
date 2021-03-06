import React, { Component } from 'react'

import Category from './Category'
import { createCategoryStructure } from './utilities'

export default class Budget extends Component {
  render () {
    const { data } = this.props
    let categoriesJSON = createCategoryStructure(data)
    return (
      <div>
        {data &&
          <div className='Budget'>
            This is Budget.
            {categoriesJSON.map((category, idx) => {
              return <Category key={idx} type={'budgets'} data={category} />
            })}
          </div>}
      </div>
    )
  }
}
