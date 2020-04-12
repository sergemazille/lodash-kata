// https://lodash.com/docs/4.17.15#first

/**
 * Gets the first element of array.
 * @param array (Array): The array to query.
 * @return (*): Returns the first element of array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray[0];
};
