// https://lodash.com/docs/4.17.15#findLastIndex

/**
 * This method is like _.findIndex except that it iterates over elements of collection from right to left.
 * @param array (Array): The array to inspect.
 * @param [predicate=_.identity] (Function): The function invoked per iteration.
 * @param [fromIndex=array.length-1] (number): The index to search from.
 * @return (number): Returns the index of the found element, else -1.
 */

export default (
  refValuesArray,
  predicate,
  fromIndex = refValuesArray.length - 1
) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  if (!predicate) {
    return 0;
  }

  // oldschool ^^
  let result = -1;

  for (let i = fromIndex; i > -1; i--) {
    if (predicate(refValuesArray[i])) {
      result = i;
      break;
    }
  }

  return result;
};
