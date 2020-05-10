// https://lodash.com/docs/4.17.15#sortedUniqBy

/**
 * This method is like _.uniqBy except that it's designed and optimized for sorted arrays.
 * @param array (Array): The array to inspect.
 * @param [iteratee] (Function): The iteratee invoked per element.
 * @return (Array): Returns the new duplicate free array.
 */

export default (refValuesArray, iteratee = () => {}) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  let result = [];
  let lng = refValuesArray.length;

  for (let i = 0; i < lng; i++) {
    const value = refValuesArray[i];
    const previousValue = refValuesArray[i - 1];

    const modifiedValue = iteratee(value);
    const modifiedPreviousValue = iteratee(previousValue);

    if (modifiedValue !== modifiedPreviousValue) {
      result.push(value);
    }
  }

  return result;
};
