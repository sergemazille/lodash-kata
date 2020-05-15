import uniq from './uniq';

describe('uniq', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      uniq(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs uniques', () => {
    const refValuesArray = [5, 6, 3, 4, 5, 2, 3, 4];

    const testCase = uniq(refValuesArray);
    const expected = [5, 6, 3, 4, 2];

    expect(testCase).toEqual(expected);
  });
});
