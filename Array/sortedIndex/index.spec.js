import sortedIndex from './sortedIndex';

describe('sortedIndex', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedIndex(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne l'index le plus petit", () => {
    const refValuesArray = [10, 20, 40, 50];
    const value = 30;

    const testCase = sortedIndex(refValuesArray, value);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("si aucune valeur n'est passée, le résultat est l'index après le dernier index du tableau", () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = sortedIndex(refValuesArray);
    const expected = 3;

    expect(testCase).toEqual(expected);
  });
});
