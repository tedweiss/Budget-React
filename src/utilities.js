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

export { createCategoryStructure }
