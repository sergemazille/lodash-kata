// https://lodash.com/docs/4.17.15#dropRight

/**
 * Creates a slice of array with n elements dropped from the end.
 * @param array (Array): The array to query.
 * @param [n=1] (number): The number of elements to drop.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray, numberToDrop = 1) => {
  if (!Array.isArray(refValuesArray) || Number.isNaN(parseInt(numberToDrop))) {
    throw new TypeError();
  }

  let arrayValues = JSON.parse(JSON.stringify(refValuesArray));
  arrayValues.splice(-numberToDrop, numberToDrop);

  return arrayValues;
};
