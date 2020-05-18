import unzip from './unzip';

describe('unzip', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      unzip(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs unzippées', () => {
    const refValuesArray = [
      ['a', 1, true],
      ['b', 2, false],
    ];

    const testCase = unzip(refValuesArray);
    const expected = [
      ['a', 'b'],
      [1, 2],
      [true, false],
    ];

    expect(testCase).toEqual(expected);
  });

  it('retourne un tableau de valeurs unzippées, non équilibrées', () => {
    const refValuesArray = [['a', 1], ['b', 2, false, { x: 'y' }], ['c']];

    const testCase = unzip(refValuesArray);
    const expected = [['a', 'b', 'c'], [1, 2], [false], [{ x: 'y' }]];

    expect(testCase).toEqual(expected);
  });
});
