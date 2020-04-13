// https://lodash.com/docs/4.17.15#flatten

/**
 * Flattens array a single level deep.
 * @param array (Array): The array to flatten.
 * @return (Array): Returns the new flattened array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];
  const depth = 1;

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
