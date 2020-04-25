// https://lodash.com/docs/4.17.15#pull

/**
 * Removes all given values from array using SameValueZero for equality comparisons.
 * Note: Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate.
 * @param array (Array): The array to modify.
 * @param [values] (...*): The values to remove.
 * @return (Array): Returns array.
 */

export default (refValuesArray, ...valuesToRemove) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  for (let i = refValuesArray.length -1 ; i >= 0; i--) {
    if (valuesToRemove.includes(refValuesArray[i])) {
      refValuesArray.splice(i, 1);
    }
  }

  return refValuesArray;
};
