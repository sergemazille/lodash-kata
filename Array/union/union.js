// https://lodash.com/docs/4.17.15#union

/**
 * Creates an array of unique values, in order,
 * from all given arrays using SameValueZero for equality comparisons.
 * @param [arrays] (...Array): The arrays to inspect.
 * @return (Array): Returns the new array of combined values.
 */

export default (...refValuesArray) => {
  const result = [];

  refValuesArray.forEach((currentArray) => {
    currentArray.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item);
      }
    });
  });

  return result;
};
