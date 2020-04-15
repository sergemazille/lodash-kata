// https://lodash.com/docs/4.17.15#initial

/**
 * Gets all but the last element of array.
 * @param array (Array): The array to query.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.slice(0, refValuesArray.length - 1);
};
