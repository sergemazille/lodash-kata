// https://lodash.com/docs/4.17.15#uniq

/**
 * This method is like _.uniq except that it accepts iteratee
 * which is invoked for each element in array to generate
 * the criterion by which uniqueness is computed.
 * The order of result values is determined by the order they occur in the array.
 * The iteratee is invoked with one argument: (value).
 * @param array (Array): The array to inspect.
 * @param [iteratee=_.identity] (Function): The iteratee invoked per element.
 * @return (Array): Returns the new duplicate free array.
 */

export default (refValuesArray, iteratee = () => {}) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  refValuesArray.forEach((item) => {
    const modifiedItem = iteratee(item);

    const isAlreadyIncluded = result.some((value) => {
      const modifiedValue = iteratee(value);

      return modifiedValue === modifiedItem;
    });

    if (!isAlreadyIncluded) {
      result.push(item);
    }
  });

  return result;
};
