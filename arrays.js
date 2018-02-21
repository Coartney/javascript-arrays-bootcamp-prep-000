var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var addElementToBeginningOfArray = [element, ...array];
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var destructivelyAddElementToBeginningOfArray = [array]
  destructivelyAddElementToBeginningOfArray[0] = element
  return destructivelyAddElementToBeginningOfArray
}
