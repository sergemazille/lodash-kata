// https://lodash.com/docs/4.17.15#tail

/**
 * Gets all but the first element of array.
 * @param array (Array): The array to query.
 * @return (Array): Returns the slice of array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const lng = refValuesArray.length;
  const result = [];


  // i commence à '1' pour ne pas inclure le premier index du tableau
  for (let i = 1; i < lng; i++) {
    result.push(refValuesArray[i]);
  }

  return result;
};
