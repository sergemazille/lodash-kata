// https://lodash.com/docs/4.17.15#difference

/**
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 * @param array (Array): The array to inspect.
 * @param [values] (...Array): The values to exclude.
 * @return (Array): Returns the new array of filtered values.
 */

export default (refValuesArray, excludingValuesArray = []) => {
  if (!Array.isArray(refValuesArray) || !Array.isArray(excludingValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.filter(item => {
    return !excludingValuesArray.includes(item);
  });
};
