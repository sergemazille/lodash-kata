// https://lodash.com/docs/4.17.15#indexOf

/**
 * Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of array.
 * @param array (Array): The array to inspect.
 * @param value (*): The value to search for.
 * @param [fromIndex=0] (number): The index to search from.
 * @return (number): Returns the index of the matched value, else -1.
 */

export default (refValuesArray, valueToSearchIndexFor, fromIndex = 0) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  let result = -1;

  for (let i = fromIndex; i < refValuesArray.length; i++) {
    if (refValuesArray[i] === valueToSearchIndexFor) {
      result = i;
      break;
    }
  }

  return result;
};
