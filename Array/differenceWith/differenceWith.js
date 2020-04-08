// https://lodash.com/docs/4.17.15#differenceWith

/**
 * This method is like _.difference except that it accepts comparator
 * which is invoked to compare elements of array to values.
 * The order and references of result values are determined by the first array.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @param array (Array): The array to inspect.
 * @param [values] (...Array): The values to exclude.
 * @param [comparator] (Function): The comparator invoked per element.
 * @return (Array): Returns the new array of filtered values.
 */

export default (refValuesArray, excludingValuesArray = [], comparator) => {
  if (
    !Array.isArray(refValuesArray) ||
    !Array.isArray(excludingValuesArray) ||
    typeof comparator !== 'function'
  ) {
    throw new TypeError();
  }

  return refValuesArray.filter((refValue) => {
    return !excludingValuesArray.some((exclValue) => {
      return comparator(refValue, exclValue);
    });
  });
};
