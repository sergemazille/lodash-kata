import pullAllBy from './pullAllBy';

describe('pullAllBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      pullAllBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('avec une fonction qui compare les valeurs modifiées des éléments', () => {
    const refValuesArray = [2.1, 1.2, 3.1, 4.9];
    const valuesToRemove = [2.3, 3.4];
    const iteratee = Math.floor;

    const testCase = pullAllBy(refValuesArray, valuesToRemove, iteratee);
    const expected = [1.2, 4.9];

    expect(testCase).toEqual(expected);
  });

  it('avec une propriété qui compare les valeurs des éléments', () => {
    const refValuesArray = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
    ];
    const valuesToRemove = [{ a: 1 }];
    const iteratee = 'a';

    const testCase = pullAllBy(refValuesArray, valuesToRemove, iteratee);
    const expected = [{ a: 2, b: 3 }];

    expect(testCase).toEqual(expected);
  });

  it('avec une propriété non pertinente', () => {
    const refValuesArray = [
      { a: 1, b: 2 },
      { a: 2, b: 3 },
    ];
    const valuesToRemove = [{ a: 1 }];
    const iteratee = 'z';

    const testCase = pullAllBy(refValuesArray, valuesToRemove, iteratee);
    const expected = refValuesArray;

    expect(testCase).toEqual(expected);
  });

  it('le tableau est bien modifié (mutation)', () => {
    const refValuesArray = [2.1, 1.2, 3.1, 4.9];
    const valuesToRemove = [2.3, 3.4];
    const iteratee = Math.floor;
    pullAllBy(refValuesArray, valuesToRemove, iteratee);

    const expected = [1.2, 4.9];

    expect(refValuesArray).toEqual(expected);
  });
});
