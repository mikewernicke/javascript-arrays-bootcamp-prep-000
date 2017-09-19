var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array // array for all array functions
// var addedArray, // array output foro non-destructive operations
//    element // to add to arrays

function addElementToBeginningOfArray (array, element) {
  var addedArray, // array output for non-destructive operations
      element // to add to addedArray
//  addedArray = (element, ...array) // solution #1
//  addedArray = array.unshift(element) // solution #2
  return [addedArray]
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray (array, element) {
//  var addedArray = (...array, element)
  return addedArray
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}
function accessElementInArray (array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}
