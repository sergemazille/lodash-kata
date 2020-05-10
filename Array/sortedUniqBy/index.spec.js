import sortedUniqBy from './sortedUniqBy';

describe('sortedUniqBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedUniqBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs uniques', () => {
    const refValuesArray = [1.1, 1.2, 1.3, 2.1];
    const iteratee = Math.floor;

    const testCase = sortedUniqBy(refValuesArray, iteratee);
    const expected = [1.1, 2.1];

    expect(testCase).toEqual(expected);
  });
});
