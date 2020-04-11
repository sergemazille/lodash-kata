// https://lodash.com/docs/4.17.15#findIndex

/**
 * This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
 * @param array (Array): The array to inspect.
 * @param [predicate=_.identity] (Function): The function invoked per iteration.
 * @param [fromIndex=0] (number): The index to search from.
 * @return (number): Returns the index of the found element, else -1.
 */

export default (refValuesArray, predicate, fromIndex = 0) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  if (!predicate) {
    return 0;
  }

  // oldschool ^^
  const lng = refValuesArray.length;
  let result = -1;

  for (let i = fromIndex; i < lng; i++) {
    if (predicate(refValuesArray[i])) {
      result = i;
      break;
    }
  }

  return result;
};
