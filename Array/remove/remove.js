// https://lodash.com/docs/4.17.15#remove

/**
 * Removes all elements from array that predicate returns truthy for and returns
 * an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
 * Note: Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value.
 * @param array (Array): The array to modify.
 * @param [predicate=_.identity] (Function): The function invoked per iteration.
 * @return (Array): Returns the new array of removed elements.
 */

export default (refValuesArray, predicate) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  if (!predicate) {
    return [];
  }

  let indexes = [];
  let result = [];

  refValuesArray.forEach((item, index) => {
    if (predicate(item)) {
      indexes.push(index);
    }
  });

  let lastIndex = refValuesArray.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    if (indexes.includes(i)) {
      result.push(...refValuesArray.splice(i, 1));
    }
  }

  return result.reverse();
};
