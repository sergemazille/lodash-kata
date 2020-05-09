import sortedUniq from './sortedUniq';

describe('sortedUniq', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedUniq(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs uniques', () => {
    const refValuesArray = [1, 2, 2, 3, 4, 5, 5, 6];

    const testCase = sortedUniq(refValuesArray);
    const expected = [1, 2, 3, 4, 5, 6];

    expect(testCase).toEqual(expected);
  });
});
