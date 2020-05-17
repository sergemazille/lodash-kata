// https://lodash.com/docs/4.17.15#uniqWith

/**
 * This method is like _.uniq except that it accepts comparator
 * which is invoked to compare elements of array.
 * The order of result values is determined by the order they occur in the array.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @param array (Array): The array to inspect.
 * @param [comparator] (Function): The comparator invoked per element.
 * @return (Array): Returns the new duplicate free array.
 */

export default (refValuesArray, comparator = () => {}) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  refValuesArray.forEach((item) => {
    const isAlreadyIncluded = result.some((value) => {
      return comparator(value, item);
    });

    if (!isAlreadyIncluded) {
      result.push(item);
    }
  });

  return result;
};
