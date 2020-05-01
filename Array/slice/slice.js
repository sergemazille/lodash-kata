// https://lodash.com/docs/4.17.15#slice

/**
 * Creates a slice of array from start up to, but not including, end.
 * Note: This method is used instead of Array#slice to ensure dense arrays are returned.
 * @param array (Array): The array to slice.
 * @param [start=0] (number): The start position.
 * @param [end=array.length] (number): The end position.
 * @return (Array): Returns the slice of array.
 */

export default (
  refValuesArray,
  fromIndex = 0,
  until = refValuesArray.length
) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.filter((item, index) => {
    return index >= fromIndex && index < until;
  });
};
