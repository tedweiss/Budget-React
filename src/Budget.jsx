import React, { Component } from 'react'
import Category from './Category'

export default class Expense extends Component {
  findCategories = () => {
    let data = this.props.data
    if (data) {
      data.sort(function (a, b) {
        if (a.category < b.category) return -1
        if (a.category > b.category) return 1
        return 0
      })
      let categories = []
      for (var i = 0; i < data.length; i++) {
        if (categories.indexOf(data[i].category) === -1) {
          categories.push(data[i].category)
        }
      }
      return categories
    }
  }
  createCategoryStructure = () => {
    let categoryArray = []
    let data = this.props.data
    if (data) {
      let categories = this.findCategories()
      categoryArray = this.createCategoryObjects(categories)
      data.forEach(function (transaction) {
        for (var i = 0; i < categoryArray.length; i++) {
          var category = Object.keys(categoryArray[i])[0]
          if (transaction.category === category) {
            categoryArray[i][category].push(transaction)
          }
        }
      })
    }
    return categoryArray
  }
  createCategoryObjects = (categories) => {
    let categoryObjects = []
    if (categories) {
      for (var i = 0; i < categories.length; i++) {
        var categoryName = categories[i]
        var category = {}
        category[categoryName] = []
        categoryObjects.push(category)
      }
      return categoryObjects
    }
  }
  render () {
    let categoriesJSON = this.createCategoryStructure()
    const {
      data,
      displayCurrency
    } = this.props
    if (data) {
      data.sort(function (a, b) {
        if (a.category < b.category) return -1
        if (a.category > b.category) return 1
        return 0
      })
    }
    return (
      <div className='Budget'>
        This is Budget.
        {data && data.map((budget, idx) => {
          return (
            <div key={idx}>
              <p>{budget.year}</p>
              <p>{budget.month}</p>
              <p>{displayCurrency(budget.amount)}</p>
              <p>{budget.category}</p>
              <p>{budget.subcategory}</p>
            </div>
          )
        })}
        {categoriesJSON.map((category, idx) => {
          return <Category
            key={idx}
            data={category}
            displayCurrency={displayCurrency} />
        })}
      </div>
    )
  }
}
