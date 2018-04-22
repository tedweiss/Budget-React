import React, { Component } from 'react'

import Category from './Category'

export default class Income extends Component {
  render () {
    const { data, transformDate, displayCurrency } = this.props
    return (
      <div>
        {data &&
          <div className='Income'>
            This is an Income.
            {data.map((category, idx) => {
              return (
                <Category
                  key={idx}
                  type={'incomes'}
                  data={category}
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
