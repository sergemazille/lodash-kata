import findLastIndex from './findLastIndex';

describe('findLastIndex', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      findLastIndex(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('aucune fonction passée en deuxieme argument', () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = findLastIndex(refValuesArray);
    const expected = 0;

    expect(testCase).toEqual(expected);
  });

  it('renvoie le bon index', () => {
    const refValuesArray = ['a', 'b', 'c'];
    const predicate = (o) => o === 'a';

    const testCase = findLastIndex(refValuesArray, predicate);
    const expected = 0;

    expect(testCase).toEqual(expected);
  });

  it("renvoie le bon index, à partir d'un index de départ", () => {
    const refValuesArray = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: false },
    ];
    const predicate = (o) => o.active;
    const fromIndex = 1;

    const testCase = findLastIndex(refValuesArray, predicate, fromIndex);
    const expected = 0;

    expect(testCase).toEqual(expected);
  });

  it('aucun élément du tableau ne répond à la condition de recherche', () => {
    const refValuesArray = ['a', 'b', 'c'];
    const predicate = (o) => o === 'd';

    const testCase = findLastIndex(refValuesArray, predicate);
    const expected = -1;

    expect(testCase).toEqual(expected);
  });
});
