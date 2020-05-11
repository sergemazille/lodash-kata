// https://lodash.com/docs/4.17.15#takeRight

/**
 * Creates a slice of array with n elements taken from the end.
 * @param array (Array): The array to query.
 * @param [n=1] (number): The number of elements to take.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray, n = 1) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];
  const lng = refValuesArray.length;
  const startIndex = lng - n;

  for (let i = startIndex; i < lng; i++) {
    if (!refValuesArray[i]) {
      break;
    }

    result.push(refValuesArray[i]);
  }

  return result;
};
