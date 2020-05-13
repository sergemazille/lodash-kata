// https://lodash.com/docs/4.17.15#unionBy

/**
 * This method is like _.union except that it accepts iteratee
 * which is invoked for each element of each arrays
 * to generate the criterion by which uniqueness is computed.
 * Result values are chosen from the first array in which the value occurs.
 * The iteratee is invoked with one argument: (value).
 * @param [arrays] (...Array): The arrays to inspect.
 * @param [iteratee=_.identity] (Function): The iteratee invoked per element.
 * @return (Array): Returns the new array of combined values.
 */

export default (...refValuesArray) => {
  const iteratee = refValuesArray.splice(-1, 1)[0];
  const uniqModified = [];
  const result = [];

  refValuesArray.forEach((currentArray) => {
    currentArray.forEach((item) => {
      const modifiedItem = iteratee(item);

      if (!uniqModified.includes(modifiedItem)) {
        uniqModified.push(modifiedItem);
        result.push(item);
      }
    });
  });

  return result;
};
