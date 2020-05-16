import uniqBy from './uniqBy';

describe('uniqBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      uniqBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs uniques', () => {
    const refValuesArray = [2.1, 1.2, 2.3];
    const iteratee = Math.floor;

    const testCase = uniqBy(refValuesArray, iteratee);
    const expected = [2.1, 1.2];

    expect(testCase).toEqual(expected);
  });
});
