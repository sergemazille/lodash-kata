// https://lodash.com/docs/4.17.15#fill

/**
 * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * @param array (Array): The array to fill.
 * @param value (*): The value to fill array with.
 * @param [start=0] (number): The start position.
 * @param [end=array.length] (number): The end position.
 * @return (Array): Returns array.
 */

export default (
  refValuesArray,
  value,
  startIndex = 0,
  endIndex = refValuesArray.length - 1
) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.map((item, index) => {
    if (index >= startIndex && index <= endIndex) {
      return value
    }

    return item;
  });
};
