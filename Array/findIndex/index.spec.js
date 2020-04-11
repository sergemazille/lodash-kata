import findIndex from './findIndex';

describe('findIndex', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      findIndex(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('aucune fonction passée en deuxieme argument', () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = findIndex(refValuesArray);
    const expected = 0;

    expect(testCase).toEqual(expected);
  });

  it('renvoie le bon index', () => {
    const refValuesArray = ['a', 'b', 'c'];
    const predicate = (o) => o === 'c';

    const testCase = findIndex(refValuesArray, predicate);
    const expected = 2;

    expect(testCase).toEqual(expected);
  });

  it("renvoie le bon index, à partir d'un index de départ", () => {
    const refValuesArray = [
      { user: 'barney', active: true },
      { user: 'fred', active: true },
      { user: 'pebbles', active: false },
    ];
    const predicate = (o) => o.active;
    const fromIndex = 1;

    const testCase = findIndex(refValuesArray, predicate, fromIndex);
    const expected = 1;

    expect(testCase).toEqual(expected);
  });

  it('aucun élément du tableau ne répond à la condition de recherche', () => {
    const refValuesArray = ['a', 'b', 'c'];
    const predicate = (o) => o === 'd';

    const testCase = findIndex(refValuesArray, predicate);
    const expected = -1;

    expect(testCase).toEqual(expected);
  });
});
