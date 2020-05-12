// https://lodash.com/docs/4.17.15#takeWhile

/**
 * Creates a slice of array with elements taken from the beginning.
 * Elements are taken until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * @param array (Array): The array to query.
 * @param [predicate=_.identity] (Function): The function invoked per iteration.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray, predicate = () => {}) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];
  const lng = refValuesArray.length;

  for (let i = 0; i < lng; i++) {
    const value = refValuesArray[i];

    if (predicate(value)) {
      result.push(value);
    } else {
      break;
    }
  }

  return result;
};
