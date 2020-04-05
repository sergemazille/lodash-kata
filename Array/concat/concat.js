// https://lodash.com/docs/4.17.15#concat

/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @param [...]
 * @return []
 */

export default (...args) => {
  return args.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
};
