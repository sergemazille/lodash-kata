// https://lodash.com/docs/4.17.15#pullAt

/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements.
 * Note: Unlike _.at, this method mutates array.
 * @param array (Array): The array to modify.
 * @param [indexes] (...(number|number[])): The indexes of elements to remove.
 * @return (Array): Returns the new array of removed elements.
 */

export default (refValuesArray, indexes = []) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  let result = [];
  let lastIndex = refValuesArray.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    if (indexes.includes(i)) {
      result.push(...refValuesArray.splice(i, 1));
    }
  }

  return result.reverse();
};
