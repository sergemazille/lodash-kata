import indexOf from './indexOf';

describe('indexOf', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      indexOf(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("renvoie -1 quand la valeur n'existe pas dans le tableau", () => {
    const refValuesArray = ['a', 'b', 'c'];
    const valueToSearchIndexFor = 'd';

    const testCase = indexOf(refValuesArray, valueToSearchIndexFor);
    const expected = -1;

    expect(testCase).toEqual(expected);
  });

  it("renvoie l'index demandé", () => {
    const refValuesArray = ['a', 'b', 'c', 'd'];
    const valueToSearchIndexFor = 'c';

    const testCase = indexOf(refValuesArray, valueToSearchIndexFor);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("renvoie l'index demandé, à partir d'un index", () => {
    const refValuesArray = ['a', 'b', 'c', 'a'];
    const valueToSearchIndexFor = 'a';
    const fromIndex = 1; // le premier 'a' sera ignoré

    const testCase = indexOf(refValuesArray, valueToSearchIndexFor, fromIndex);
    const expected = 3;

    expect(testCase).toEqual(expected);
  });
});
