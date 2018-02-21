var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var addElementToBeginningOfArray = [element, ...array];
  return addElementToBeginningOfArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  const destructivelyAddElementToBeginningOfArray = [element, ...array]
  var changeArray = destructivelyAddElementToBeginningOfArray[array]
  return changeArray
}
