// https://lodash.com/docs/4.17.15#unionWith

/**
 * This method is like _.union except that it accepts comparator
 * which is invoked to compare elements of arrays.
 * Result values are chosen from the first array in which the value occurs.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @param [arrays] (...Array): The arrays to inspect.
 * @param [comparator] (Function): The comparator invoked per element.
 * @return (Array): Returns the new array of combined values.
 */

export default (...refValuesArray) => {
  const reference = refValuesArray.splice(0, 1)[0];
  const comparator = refValuesArray.splice(-1, 1)[0];
  const valuesArray = refValuesArray.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);

  const result = [];

  reference.forEach((refValue) => {
    valuesArray.forEach((othValue) => {
      const doInclude = comparator(refValue, othValue);
      const alreadyIncluded = result.includes(othValue);

      if (doInclude && !alreadyIncluded) {
        result.push(othValue);
      }
    });
  });

  return result;
};
