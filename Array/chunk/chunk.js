// https://lodash.com/docs/4.17.15#chunk

/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param []
 * @return []
 */

export default (inputArray, chunksLength = inputArray.length) => {
  if (!Array.isArray(inputArray)) {
    throw new TypeError();
  }

  const _inputArray = JSON.parse(JSON.stringify(inputArray));

  if (chunksLength < 1) {
    return [];
  }

  if (chunksLength >= _inputArray.length) {
    return _inputArray;
  }

  const result = [];

  while (_inputArray.length) {
    result.push(_inputArray.splice(0, chunksLength));
  }

  return result;
};
