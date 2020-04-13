// https://lodash.com/docs/4.17.15#flattenDeep

/**
 * Recursively flattens array.
 * @param array (Array): The array to flatten.
 * @return (Array): Returns the new flattened array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  const flatten = (item) => {
    if (!Array.isArray(item)) {
      return result.push(item);
    }

    item.forEach(subItem => {
      flatten(subItem)
    });
  };

  refValuesArray.forEach((item) => {
    flatten(item);
  });

  return result;
};
