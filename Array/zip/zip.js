// https://lodash.com/docs/4.17.15#zip

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 * @param [arrays] (...Array): The arrays to process.
 * @return (Array): Returns the new array of grouped elements.
 */

export default (...refValuesArrays) => {
  const result = [];
  const valuesDeepCopy = refValuesArrays.slice(0);
  let deepestArrayLength = 0;

  // récupère le nombre d'élément du tableau ayant le plus d'éléments
  valuesDeepCopy.forEach((valueArray) => {
    if (valueArray.length >= deepestArrayLength) {
      deepestArrayLength = valueArray.length;
    }
  });

  for (let i = 0; i < deepestArrayLength; i++) {
    valuesDeepCopy.forEach((values) => {
      if (!Array.isArray(result[i])) {
        result[i] = [];
      }

      result[i].push(values[i]);
    });
  }

  return result;
};
