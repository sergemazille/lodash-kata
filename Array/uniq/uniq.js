// https://lodash.com/docs/4.17.15#uniq

/**
 * Creates a duplicate-free version of an array,
 * using SameValueZero for equality comparisons,
 * in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 * @param array (Array): The array to inspect.
 * @return (Array): Returns the new duplicate free array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  refValuesArray.forEach((item) => {
    const isAlreadyIncluded = result.includes(item);

    if (!isAlreadyIncluded) {
      result.push(item);
    }
  });

  return result;
};
