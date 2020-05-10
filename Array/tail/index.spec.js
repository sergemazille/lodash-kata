import tail from './tail';

describe('tail', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      tail(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau sans le premier élément', () => {
    const refValuesArray = [1, 2, 3, 4];

    const testCase = tail(refValuesArray);
    const expected = [2,3,4];

    expect(testCase).toEqual(expected);
  });
});
