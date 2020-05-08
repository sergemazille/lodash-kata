import sortedLastIndexOf from './sortedLastIndexOf';

describe('sortedLastIndexOf', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedLastIndexOf(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne le premier index suivant celui correspondant à la valeur recherchée', () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'b'];
    const value = 'b';

    const testCase = sortedLastIndexOf(refValuesArray, value);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("retourne -1 si la valeur n'existe pas dans le tableau", () => {
    const refValuesArray = ['a', 'b', 'c', 'd'];
    const value = 'e';

    const testCase = sortedLastIndexOf(refValuesArray, value);
    const expected = -1;

    expect(testCase).toEqual(expected);
  });
});
