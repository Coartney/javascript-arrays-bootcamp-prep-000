var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var addElementToBeginningOfArray = [element, ...array];
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
var newArray = array;
newArray.unshift(element)
return newArray
}

function addElementToEndOfArray(array, element){
  var sillyArray = [array..., element]
  return sillyArray
}