// https://lodash.com/docs/4.17.15#sortedLastIndexBy

/**
 * TThis method is like _.sortedLastIndex except that it accepts iteratee
 * which is invoked for value and each element of array to compute their sort ranking.
 * The iteratee is invoked with one argument: (value).
 * @param array (Array): The sorted array to inspect.
 * @param value (*): The value to evaluate.
 * @param [iteratee=_.identity] (Function): The iteratee invoked per element.
 * @return (number): Returns the index at which value should be inserted into array.
 */

export default (refValuesArray, value, iteratee = () => {}) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const lng = refValuesArray.length;
  let result = lng;

  for (let i = 0; i < lng; i++) {
    const modifiedValue = iteratee(value);
    const modifiedRefValue = iteratee(refValuesArray[i]);
    const modifiedNextRefValue = iteratee(refValuesArray[i + 1]);

    if (
      modifiedValue >= modifiedRefValue &&
      modifiedValue < modifiedNextRefValue
    ) {
      result = i + 1;
      break;
    }
  }

  return result;
};
