import React, { Component } from 'react'

export default class Category extends Component {
  totalCategoryAmount = () => {
    let data = this.props.data
    if (data) {
      let subcategories = data[Object.keys(data)[0]]
      let total = 0
      subcategories.forEach(function (subcategory) {
        total += parseFloat(subcategory.amount)
      })
      return total
    }
  }
  render () {
    const {
      data,
      displayCurrency
    } = this.props
    let categoryTitle = Object.keys(data)[0]
    let categoryTotal = this.totalCategoryAmount()
    if (!data) {
      return <div />
    } else {
      return (
        <div className='Category'>
          {data &&
            <div>
              <p>This is a Category.</p>
              <p>{categoryTitle}: {displayCurrency(categoryTotal)}</p>
              {data[categoryTitle].map((category, idx) => {
                return (
                  <div key={idx}>
                    <p>{category.year}</p>
                    <p>{category.month}</p>
                    <p>{category.subcategory}</p>
                    <p>{displayCurrency(category.amount)}</p>
                    {/* <p>{transformDate(category.date)}</p> */}
                    <p>{category.income_source}</p>
                    <p>{category.whose_income}</p>
                    <p>{category.notes}</p>
                  </div>
                )
              })}
            </div>}
        </div>
      )
    }
  }
}
