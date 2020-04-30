// https://lodash.com/docs/4.17.15#reverse

/**
 * Reverses array so that the first element becomes the last,
 * the second element becomes the second to last, and so on.
 * Note: This method mutates array and is based on Array#reverse.
 * @param array (Array): The array to modify.
 * @return (Array): Returns array.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const reversedArray = [];
  const lastIndex = refValuesArray.length - 1;

  for (let i = lastIndex; i >=0; i--) {
    reversedArray.push(refValuesArray[i]);
  }

  refValuesArray = reversedArray;
  return refValuesArray;
};
