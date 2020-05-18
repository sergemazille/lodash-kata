// https://lodash.com/docs/4.17.15#uniqWith

/**
 * This method is like _.zip except that it accepts an array of grouped elements
 * and creates an array regrouping the elements to their pre-zip configuration.
 * @param array (Array): The array of grouped elements to process.
 * @return (Array): Returns the new array of regrouped elements.
 */

export default (refValuesArray) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  const result = [];

  refValuesArray.forEach((values) => {
    const lng = values.length;

    for (let i = 0; i < lng; i++) {
      if (!Array.isArray(result[i])) {
        result[i] = [];
      }

      result[i] = [...result[i], values[i]];
    }
  });

  return result;
};
