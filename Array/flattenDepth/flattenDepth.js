// https://lodash.com/docs/4.17.15#flattenDepth

/**
 * Recursively flatten array up to depth times.
 * @param array (Array): The array to flatten.
 * @param [depth=1] (number): The maximum recursion depth.
 * @return (Array): Returns the new flattened array.
 */

export default (refValuesArray, depth = 1) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  if (depth === 0) {
    return refValuesArray;
  }

  const result = [];

  const flatten = (item, iteration) => {
    if (!Array.isArray(item) || iteration === depth) {
      return result.push(item);
    }

    item.forEach(subItem => {
      flatten(subItem, ++iteration)
    });
  };

  refValuesArray.forEach((item) => {
    const iteration = 0;
    flatten(item, iteration);
  });

  return result;
};
