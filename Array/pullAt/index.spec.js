import pullAt from './pullAt';

describe('pullAt', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      pullAt(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('renvoie un tableau des éléments retirés', () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e'];
    const indexesToPull = [2, 4];

    const testCase = pullAt(refValuesArray, indexesToPull);
    const expected = ['c', 'e'];

    expect(testCase).toEqual(expected);
  })

  it("renvoie un tableau vide si aucun indice n'est fourni", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e'];

    const testCase = pullAt(refValuesArray);
    const expected = [];

    expect(testCase).toEqual(expected);
  })

  
  it("le tableau original est bien modifié (mutation)", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e'];
    const indexesToPull = [2, 4];

    pullAt(refValuesArray, indexesToPull);
    const expected = ['a', 'b', 'd'];

    expect(refValuesArray).toEqual(expected);
  })
});
