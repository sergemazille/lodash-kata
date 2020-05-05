import sortedLastIndex from './sortedLastIndex';

describe('sortedLastIndex', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedLastIndex(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne l'index le plus grand tout en maintenant l'ordre (sans doublon)", () => {
    const refValuesArray = [1, 2, 4, 5];
    const value = 3;

    const testCase = sortedLastIndex(refValuesArray, value);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("retourne l'index le plus grand tout en maintenant l'ordre", () => {
    const refValuesArray = [1, 2, 3, 4];
    const value = 2;

    const testCase = sortedLastIndex(refValuesArray, value);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("si aucune valeur n'est passée, le résultat est l'index après le dernier index du tableau", () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = sortedLastIndex(refValuesArray);
    const expected = 3;

    expect(testCase).toEqual(expected);
  });
});
