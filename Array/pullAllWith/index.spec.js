import pullAllWith from './pullAllWith';

describe('pullAllWith', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      pullAllWith(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("avec la fonction d'égalité par défaut", () => {
    const refValuesArray = [2.1, 1.2, 3.1, 4.9];
    const valuesToRemove = [2.1, 3.1];

    const testCase = pullAllWith(refValuesArray, valuesToRemove);
    const expected = [1.2, 4.9];

    expect(testCase).toEqual(expected);
  });

  it("avec la fonction d'égalité par défaut", () => {
    const refValuesArray = [1, 2, 3, 4, 5];
    const valuesToRemove = [3, 6, 8, 2];
    const comparator = (a, b) => a > b;

    const testCase = pullAllWith(refValuesArray, valuesToRemove, comparator);
    const expected = [1, 2];

    expect(testCase).toEqual(expected);
  });
});
