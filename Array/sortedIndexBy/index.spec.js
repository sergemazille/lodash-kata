import sortedIndexBy from './sortedIndexBy';

describe('sortedIndexBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedIndexBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne l'index attendu", () => {
    const refValuesArray = [{ x: 4 }, { x: 6 }];
    const value = { x: 5 };
    const iteratee = (obj) => obj.x;

    const testCase = sortedIndexBy(refValuesArray, value, iteratee);
    const expected = 1;

    expect(testCase).toEqual(expected);
  });

  it("si aucune valeur n'est passée, le résultat est l'index suivant le dernier index du tableau", () => {
    const refValuesArray = [{ x: 4 }, { x: 6 }];
    const iteratee = (obj) => obj;

    const testCase = sortedIndexBy(refValuesArray, null, iteratee);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("si aucune fonction n'est passée, le résultat est l'index suivant le dernier index du tableau", () => {
    const refValuesArray = [{ x: 4 }, { x: 6 }];
    const value = { x: 5 };

    const testCase = sortedIndexBy(refValuesArray, value);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });
});
