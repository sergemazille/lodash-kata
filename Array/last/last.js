// https://lodash.com/docs/4.17.15#last

/**
 * Gets the last element of array.
 * @param array (Array): The array to query.
 * @return (*): Returns the last element of array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray[refValuesArray.length - 1];
};
