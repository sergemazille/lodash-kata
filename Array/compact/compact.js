// https://lodash.com/docs/4.17.15#compact

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * @param array (Array): The array to compact.
 * @return (Array): Returns the new array of filtered values.
 */

export default (inputArray) => {
  if (!Array.isArray(inputArray)) {
    throw new TypeError();
  }

  const valuesToFilter = [false, null, 0, '', undefined, NaN];

  const result = inputArray.filter((item) => {
    // pas de tableaux vides
    if (Array.isArray(item) && !item.length) {
      return false;
    }

    // pas d'objets vides
    if (typeof item === 'object' && item !== null) {
      return Object.keys(item).length > 0;
    }

    return !valuesToFilter.includes(item);
  });

  return result;
};
