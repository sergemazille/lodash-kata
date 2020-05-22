import without from './without';

describe('without', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      without(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau filtré', () => {
    const refValuesArray = [1, 'a', 2, true, 3];
    const valuesToExclude = [1, true];

    const testCase = without(refValuesArray, ...valuesToExclude);
    const expected = ['a', 2, 3];

    expect(testCase).toEqual(expected);
  });
});
