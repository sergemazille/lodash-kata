// https://lodash.com/docs/4.17.15#xorWith

/**
 * This method is like _.xor except that it accepts comparator which is invoked to compare elements of arrays.
 * The order of result values is determined by the order they occur in the arrays.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @param [arrays] (...Array): The arrays to inspect.
 * @param [comparator] (Function): The comparator invoked per element.
 * @return (Array): Returns the new array of filtered values.
 */

export default (refValuesArray = [], valuesToToggle = [], comparator) => {
  if (!Array.isArray(refValuesArray) || !Array.isArray(valuesToToggle)) {
    throw new TypeError();
  }

  const uniqValues = [];

  // 1. purge duplicates from valuesToToggle
  valuesToToggle.forEach((value) => {
    const tempArray = uniqValues.map((item) => JSON.stringify(item));

    if (!tempArray.includes(JSON.stringify(value))) {
      uniqValues.push(value);
    }
  });

  const result = [];

  // 2. 'keep' untargetted values
  refValuesArray.forEach((refValue) => {
    const targetted = uniqValues.some(item => {
      return comparator(refValue, item);
    });

    if (!targetted) {
      result.push(refValue);
    }
  });

  // 3. add new values
  uniqValues.forEach((value) => {
    const alreadyIncluded = refValuesArray.some(item => {
      return comparator(value, item);
    });

    if (!alreadyIncluded) {
      result.push(value);
    }
  });

  return result;
};
