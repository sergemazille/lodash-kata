// https://lodash.com/docs/4.17.15#zipObject

/**
 * This method is like _.fromPairs except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 * @param [props=[]] (Array): The property identifiers.
 * @param [values=[]] (Array): The property values.
 * @return (Object): Returns the new object.
 */

export default (props = [], values = []) => {
  if (!Array.isArray(props) || !Array.isArray(values)) {
    throw new TypeError();
  }

  const result = props.reduce((accumulator, property, index) => {
    return {
      ...accumulator,
      [property]: values[index]
    }
  }, {});

  return result;
};
