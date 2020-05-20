// https://lodash.com/docs/4.17.15#unzipWith

/**
 * This method is like _.unzip except that it accepts iteratee to specify
 * how regrouped values should be combined.
 * The iteratee is invoked with the elements of each group: (...group).
 * @param array (Array): The array of grouped elements to process.
 * @param [iteratee=_.identity] (Function): The function to combine regrouped values.
 * @return (Array): Returns the new array of regrouped elements.
 */

export default (refValuesArray, iteratee) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  refValuesArray.forEach((values) => {
    const lng = values.length;

    for (let i = 0; i < lng; i++) {
      if (!Array.isArray(result[i])) {
        result[i] = [];
      }

      result[i] = [...result[i], values[i]];
    }
  });

  return result.map(values => iteratee(values));
};
