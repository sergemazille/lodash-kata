// https://lodash.com/docs/4.17.15#intersectionBy

/**
 * This method is like _.intersection except that it accepts iteratee which is invoked for each element
 * of each arrays to generate the criterion by which they're compared.
 * The order and references of result values are determined by the first array.
 * The iteratee is invoked with one argument: (value).
 * @param [arrays] (...Array): The arrays to inspect.
 * @param [iteratee=_.identity] (Function): The iteratee invoked per element.
 * @return (Array): Returns the new array of intersecting values.
 */

export default (refValuesArray, ...args) => {
  if (!Array.isArray(refValuesArray)) {
    throw new TypeError();
  }

  // récupère la fonction à exécuter et ne garde que des tableaux dans args
  const iteratee = args.splice(-1, 1).shift();

  return refValuesArray.filter(item => {
    const modifiedItem = iteratee(item);

    return args.every(currentArray => {
      return currentArray.map(value => iteratee(value)).includes(modifiedItem);
    })
  });
};
