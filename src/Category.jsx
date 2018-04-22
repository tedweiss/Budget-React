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
      return total.toFixed(2)
    }
  }
  IncomeDisplay = props => {
    let income = props.income
    return (
      <div>
        <p>{income.year}</p>
        <p>{income.month}</p>
        <p>{props.displayCurrency(income.amount)}</p>
        <p>{props.transformDate(income.date)}</p>
        <p>{income.income_source}</p>
        <p>{income.whose_income}</p>
        <p>{income.notes}</p>
      </div>
    )
  }
  render () {
    const { data, type, displayCurrency, transformDate } = this.props
    let categoryTitle = Object.keys(data)[0]
    if (!data) {
      return <div />
    } else {
      if (type === 'incomes') {
        return <this.IncomeDisplay income={data} displayCurrency={displayCurrency} transformDate={transformDate} />
      }
      let categoryTotal = this.totalCategoryAmount()
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
                    {type === 'expenses' && <p>{transformDate(category.date)}</p>}
                    <p>{category.payee}</p>
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
