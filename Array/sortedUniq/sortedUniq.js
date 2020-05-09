// https://lodash.com/docs/4.17.15#sortedUniq

/**
 * This method is like _.uniq except that it's designed and optimized for sorted arrays.
 * @param array (Array): The array to inspect.
 * @return (Array): Returns the new duplicate free array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  let result = [];
  let lng = refValuesArray.length;

  for (let i = 0; i < lng; i++) {
    if (refValuesArray[i] === refValuesArray[i - 1]) {
      continue;
    }

    result.push(refValuesArray[i]);
  }

  return result;
};
