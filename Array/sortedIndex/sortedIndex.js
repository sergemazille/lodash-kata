// https://lodash.com/docs/4.17.15#sortedIndex

/**
 * Uses a binary search to determine the lowest index at which value
 * should be inserted into array in order to maintain its sort order.
 * @param array (Array): The sorted array to inspect.
 * @param value (*): The value to evaluate.
 * @return (number): Returns the index at which value should be inserted into array.
 */

export default (refValuesArray, value) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const lng = refValuesArray.length;
  let result = lng;

  for (let i = 0; i < lng; i++) {
    if (value <= refValuesArray[i]) {
      result = i;
      break;
    }
  }

  return result;
};
