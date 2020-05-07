import sortedLastIndexBy from './sortedLastIndexBy';

describe('sortedLastIndexBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      sortedLastIndexBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne l'index attendu", () => {
    const refValuesArray = [{ x: 4 }, { x: 6 }];
    const value = { x: 5 };
    const iteratee = (obj) => obj.x;

    const testCase = sortedLastIndexBy(refValuesArray, value, iteratee);
    const expected = 1;

    expect(testCase).toEqual(expected);
  });

  it("en cas d'égalité retourne l'index suivant l'élément ayant la même valeur", () => {
    const refValuesArray = [{ x: 2 }, { x: 4 }, { x: 6 }];
    const value = { x: 4 };
    const iteratee = (obj) => obj.x;

    const testCase = sortedLastIndexBy(refValuesArray, value, iteratee);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("si aucune valeur n'est passée, le résultat est l'index suivant le dernier index du tableau", () => {
    const refValuesArray = [{ x: 4 }, { x: 6 }];
    const iteratee = (obj) => obj;

    const testCase = sortedLastIndexBy(refValuesArray, null, iteratee);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("si aucune fonction n'est passée, le résultat est l'index suivant le dernier index du tableau", () => {
    const refValuesArray = [{ x: 4 }, { x: 6 }];
    const value = { x: 5 };

    const testCase = sortedLastIndexBy(refValuesArray, value);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });
});
