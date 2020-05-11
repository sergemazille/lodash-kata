// https://lodash.com/docs/4.17.15#take

/**
 * Creates a slice of array with n elements taken from the beginning.
 * @param array (Array): The array to query.
 * @param [n=1] (number): The number of elements to take.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray, n = 1) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    if (!refValuesArray[i]) {
      break;
    }

    result.push(refValuesArray[i]);
  }

  return result;
};
