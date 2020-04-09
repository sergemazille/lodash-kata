// https://lodash.com/docs/4.17.15#dropWhile

/**
 * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * @param array (Array): The array to query.
 * @param [predicate=_.identity] (Function): The function invoked per iteration.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray, predicate) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  if (!predicate) {
    return refValuesArray;
  }

  const firstFalseyValueIndex = refValuesArray.findIndex(refValue => {
    return !predicate(refValue)
  });

  let arrayValues = JSON.parse(JSON.stringify(refValuesArray));
  arrayValues.splice(0, firstFalseyValueIndex);

  return arrayValues;
};
