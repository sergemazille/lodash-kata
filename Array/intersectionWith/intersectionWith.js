// https://lodash.com/docs/4.17.15#intersectionWith

/**
 * This method is like _.intersection except that it accepts comparator
 * which is invoked to compare elements of arrays.
 * The order and references of result values are determined by the first array.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @param [arrays] (...Array): The arrays to inspect.
 * @param [comparator] (Function): The comparator invoked per element.
 * @return (Array): Returns the new array of intersecting values.
 */

export default (refValuesArray, ...args) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  // récupère la fonction de comparaison à exécuter
  // et ne garde que des tableaux dans args
  const comparator = args.splice(-1, 1).shift();

  return refValuesArray.filter(item => {
    return args.every(currentArray => {
      return currentArray.some(value => {
        return comparator(item, value)
      })
    })
  });
};
