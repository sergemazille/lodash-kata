// https://lodash.com/docs/4.17.15#concat

/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param array (Array): The array to concatenate.
 * @param [values] (...*): The values to concatenate.
 * @return (Array): Returns the new concatenated array.
 */

export default (...args) => {
  return args.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
};
