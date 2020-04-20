// https://lodash.com/docs/4.17.15#lastIndexOf

/**
 * This method is like _.indexOf except that it iterates over elements of array from right to left.
 * @param array (Array): The array to inspect.
 * @param value (*): The value to search for.
 * @param [fromIndex=array.length-1] (number): The index to search from.
 * @return (number): Returns the index of the matched value, else -1.
 */

export default (
  refValuesArray,
  value,
  fromIndex = refValuesArray.length - 1
) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  let result;

  for (let i = fromIndex; i >= 0; i--) {
    if(refValuesArray[i] === value) {
      result = i;
      break;
    }
  }

  return result;
};
