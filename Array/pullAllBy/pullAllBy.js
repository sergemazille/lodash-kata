// https://lodash.com/docs/4.17.15#pullAllBy

/**
 * This method is like _.pullAll except that it accepts iteratee
 * which is invoked for each element of array and values to generate
 * the criterion by which they're compared.
 * The iteratee is invoked with one argument: (value).
 * Note: Unlike _.differenceBy, this method mutates array.
 * @param array (Array): The array to modify.
 * @param values (Array): The values to remove.
 * @param [iteratee=_.identity] (Function): The iteratee invoked per element.
 * @return (Array): Returns array.
 */

export default (refValuesArray, valuesToRemove = [], iteratee = (a) => a) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  // iteratee est une fonction
  if (typeof iteratee === 'function') {
    refValuesArray.forEach((item) => {
      const modifiedItem = iteratee(item);

      const itemIndex = valuesToRemove.findIndex(
        (value) => iteratee(value) === modifiedItem
      );

      if (itemIndex >= 0) {
        refValuesArray.splice(itemIndex, 1);
      }
    });

    return refValuesArray;
  }

  // iteratee est un élément de comparaison
  refValuesArray.forEach((item) => {
    const itemToCompare = item[iteratee];

    if (itemToCompare) {
      const itemIndex = valuesToRemove.findIndex(
        (value) => value[iteratee] === itemToCompare
      );
  
      if (itemIndex >= 0) {
        refValuesArray.splice(itemIndex, 1);
      }
    }
  });

  return refValuesArray;
};
