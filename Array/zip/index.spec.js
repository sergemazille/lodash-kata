import zip from './zip';

describe('zip', () => {
  it('retourne un tableau de valeurs zippées', () => {
    const refValuesArrays = [
      ['a', 'b'],
      [1, 2],
      [true, false],
    ];

    const testCase = zip(...refValuesArrays);
    const expected = [
      ['a', 1, true],
      ['b', 2, false],
    ];

    expect(testCase).toEqual(expected);
  });

  it('retourne un tableau de valeurs zippées, non équilibrées', () => {
    const refValuesArrays = [
      ['a', 'b'],
      [1, 2],
      [true, false],
      ['c', 'd', 'e'],
    ];

    const testCase = zip(...refValuesArrays);
    const expected = [
      ['a', 1, true, 'c'],
      ['b', 2, false, 'd'],
      [undefined, undefined, undefined, 'e'],
    ];

    expect(testCase).toEqual(expected);
  });
});
