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
  var sillyArray = array;
  return sillyArray.concat(element);
}

function destructivelyAddElementToEndOfArray(array, element){
  var practiceArray = array;
  practiceArray.push(element);
  return practiceArray
}

function accessElementInArray (array, index){
  var accessElement = array;
  accessElement[index] = arrayElement;
  return element
}