// https://lodash.com/docs/4.17.15#sortedLastIndexOf

/**
 * This method is like _.lastIndexOf except that it performs a binary search on a sorted array.
 * @param array (Array): The array to inspect.
 * @param value (*): The value to search for.
 * @return (number): Returns the index of the matched value, else -1.
 */

export default (refValuesArray, value, iteratee = () => {}) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const lng = refValuesArray.length;
  let result = -1;

  for (let i = 0; i < lng; i++) {
    if (value >= refValuesArray[i] && value < refValuesArray[i + 1]) {
      result = i + 1;
      break;
    }
  }

  return result;
};
