// https://lodash.com/docs/4.17.15#pullAll

/**
 * This method is like _.pull except that it accepts an array of values to remove.
 * Note: Unlike _.difference, this method mutates array.
 * @param array (Array): The array to modify.
 * @param values (Array): The values to remove.
 * @return (Array): Returns array.
 */

export default (refValuesArray, valuesToRemove) => {
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
