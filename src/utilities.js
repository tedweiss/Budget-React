function findCategories (data) {
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
function createCategoryStructure (data) {
  let categoryArray = []
  if (data) {
    let categories = findCategories(data)
    categoryArray = createCategoryObjects(categories)
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
function createCategoryObjects (categories) {
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
function displayCurrency (amount) {
  if (amount < 0) {
    amount = '-$' + createNumberWithCommas(amount)
  } else {
    amount = '$' + createNumberWithCommas(amount)
  }
  return amount
}
function createNumberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
function transformDate (date) {
  var newDay = date.slice(8, 10)
  var newMonth = date.slice(5, 7)
  var newYear = date.slice(2, 4)
  newDay = checkSingleDigitDate(newDay)
  newMonth = checkSingleDigitDate(newMonth)
  var newDate = newMonth + '/' + newDay + '/' + newYear
  return newDate
}
function checkSingleDigitDate (date) {
  if (date.indexOf(0) === 0) {
    date = date.slice(1)
  }
  return date
}

export { createCategoryStructure, displayCurrency, transformDate }
