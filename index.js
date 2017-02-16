function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

// log out animals -- pretty cool, right?
console.log(animals)
