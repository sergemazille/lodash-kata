// https://lodash.com/docs/4.17.15#intersection

/**
 * Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 * @param [arrays] (...Array): The arrays to inspect.
 * @return (Array): Returns the new array of intersecting values.
 */

export default (refValuesArray, ...arrayValues) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.filter((item) => {
    return arrayValues.every((refArray) => refArray.includes(item));
  });
};
