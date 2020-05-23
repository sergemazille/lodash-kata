// https://lodash.com/docs/4.17.15#xor

/**
 * Creates an array of unique values that is the symmetric difference of the given arrays.
 * The order of result values is determined by the order they occur in the arrays.
 * @param [arrays] (...Array): The arrays to inspect.
 * @return (Array): Returns the new array of filtered values.
 */

export default (refValuesArray = [], valuesToToggle = []) => {
  if (!Array.isArray(refValuesArray) || !Array.isArray(valuesToToggle)) {
    throw new TypeError();
  }

  const uniqValues = [];

  // 1. purge duplicates from valuesToToggle
  valuesToToggle.forEach((value) => {
    if (!uniqValues.includes(value)) {
      uniqValues.push(value);
    }
  });

  const result = [];

  // 2. add uniq values
  refValuesArray.forEach((refValue) => {
    if (!uniqValues.includes(refValue)) {
      result.push(refValue);
    }
  });

  // 3. add new values
  uniqValues.forEach((value) => {
    if (!refValuesArray.includes(value)) {
      result.push(value);
    }
  });

  return result;
};
