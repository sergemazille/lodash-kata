// https://lodash.com/docs/4.17.15#pullAllWith

/**
 * This method is like _.pullAll except that it accepts comparator
 * which is invoked to compare elements of array to values.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * Note: Unlike _.differenceWith, this method mutates array.
 * @param array (Array): The array to modify.
 * @param values (Array): The values to remove.
 * @param [comparator] (Function): The comparator invoked per element.
 * @return (Array): Returns array.
 */

export default (
  refValuesArray,
  valuesToRemove = [],
  comparator = (a, b) => a === b
) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  let indicesToRemove = [];

  refValuesArray.forEach((item, index) => {
    valuesToRemove.forEach((value) => {
      if (comparator(item, value)) {
        indicesToRemove.push(index);
      }
    });
  });

  indicesToRemove.reverse().forEach((index) => {
    refValuesArray.splice(index, 1);
  });

  return refValuesArray;
};
