// https://lodash.com/docs/4.17.15#nth

/**
 * Gets the element at index n of array. If n is negative, the nth element from the end is returned.
 * @param array (Array): The array to query.
 * @param [n=0] (number): The index of the element to return.
 * @return (*): Returns the nth element of array.
 */

export default (refValuesArray, index = 0) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  if (index < 0) {
    index = refValuesArray.length + index
  }

  return refValuesArray[index];
};
