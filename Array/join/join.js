// https://lodash.com/docs/4.17.15#join

/**
 * Converts all elements in array into a string separated by separator.
 * @param array (Array): The array to convert.
 * @param [separator=','] (string): The element separator.
 * @return (string): Returns the joined string.
 */

export default (refValuesArray, separator = ',') => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.reduce((accumulator, currentItem, index) => {
    if (index === refValuesArray.length - 1) {
      separator = '';
    }

    return accumulator + currentItem + separator;
  }, '');
};
