import sortedIndexOf from './sortedIndexOf';

describe('sortedIndexOf', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedIndexOf(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne le premier index correspodant à la valeur recherchée', () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'b'];
    const value = 'b';

    const testCase = sortedIndexOf(refValuesArray, value);
    const expected = 1;

    expect(testCase).toEqual(expected);
  });

  it("retourne -1 si la valeur n'existe pas dans le tableau", () => {
    const refValuesArray = ['a', 'b', 'c', 'd'];
    const value = 'e';

    const testCase = sortedIndexOf(refValuesArray, value);
    const expected = -1;

    expect(testCase).toEqual(expected);
  });
});
