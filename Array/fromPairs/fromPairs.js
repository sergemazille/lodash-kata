// https://lodash.com/docs/4.17.15#fromPairs

/**
 * The inverse of _.toPairs; this method returns an object composed from key-value pairs.
 * @param array pairs (Array): The key-value pairs.
 * @return (Object): Returns the new object.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  return refValuesArray.reduce((accumulator, [prop, value]) => {
    accumulator[prop] = value;

    return accumulator;
  }, {});
};
