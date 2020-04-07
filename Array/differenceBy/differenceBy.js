// https://lodash.com/docs/4.17.15#differenceBy

/**
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
 * and values to generate the criterion by which they're compared.
 * The order and references of result values are determined by the first array.
 * The iteratee is invoked with one argument: (value).
 * @param array (Array): The array to inspect.
 * @param [values] (...Array): The values to exclude.
 * @param [iteratee=_.identity] (Function): The iteratee invoked per element.
 * @return []
 */

export default (refValuesArray, excludingValuesArray = [], iteratee) => {
  if (!Array.isArray(refValuesArray) || !Array.isArray(excludingValuesArray)) {
    throw new TypeError();
  }

  // application d'une fonction
  if (typeof iteratee === 'function') {
    return refValuesArray.filter((item) => {
      const modifiedItem = iteratee(item);

      return !excludingValuesArray.some((value) => {
        const modifiedValue = iteratee(value);

        return modifiedItem === modifiedValue;
      });
    });
  }

  // si aucun objet du tableau servant de filtre n'a la propriété de l'iteratee
  const hasExcludingIteratee = excludingValuesArray.some((excludingValue) => {
    return Object.keys(excludingValue).includes(iteratee);
  });

  if (!hasExcludingIteratee) {
    return refValuesArray;
  }

  // filtre par tableau d'exclusion et iteratee
  return refValuesArray.filter((objItem) => {
    // si l'objet du tableau à filter n'a pas la propriété de l'iteratee
    if (!Object.keys(objItem).includes(iteratee)) {
      return true;
    }

    return !excludingValuesArray.some((exclValueObj) => {
      return objItem[iteratee] === exclValueObj[iteratee];
    });
  });
};
