// https://lodash.com/docs/4.17.15#without

/**
 * Creates an array excluding all given values using SameValueZero for equality comparisons.
 * Note: Unlike _.pull, this method returns a new array.
 * @param array (Array): The array to inspect.
 * @param [values] (...*): The values to exclude.
 * @return (Array): Returns the new array of filtered values.
 */

export default (refValuesArray = [], ...values) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.filter(item => {
    return !values.includes(item);
  });
};
