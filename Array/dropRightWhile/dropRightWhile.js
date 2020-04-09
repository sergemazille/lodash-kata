// https://lodash.com/docs/4.17.15#dropRightWhile

/**
 * Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
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

  // copie du tableau
  let arrayValues = JSON.parse(JSON.stringify(refValuesArray));

  // inversement de l'ordre
  let reversedArrayValue = arrayValues.reverse();

  const firstFalseyValueIndex = reversedArrayValue.findIndex(refValue => {
    return !predicate(refValue)
  });

  reversedArrayValue.splice(0, firstFalseyValueIndex);

  // remet dans l'ordre d'origine avant de retourner le résultat
  return reversedArrayValue.reverse();
};
