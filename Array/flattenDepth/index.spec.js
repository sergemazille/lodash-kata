import flattenDepth from './flattenDepth';

describe('flattenDepth', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      flattenDepth(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('tableau vide passé en premier argument', () => {
    const refValuesArray = [];

    const testCase = flattenDepth(refValuesArray);
    const expected = refValuesArray;

    expect(testCase).toEqual(expected);
  });

  it("renvoie le tableau 'applati' de zéro niveau", () => {
    const refValuesArray = ['a', ['b', 'c'], [['d']]];

    const testCase = flattenDepth(refValuesArray, 0);
    const expected = JSON.parse(JSON.stringify(refValuesArray));

    expect(testCase).toEqual(expected);
  });

  it("renvoie le tableau 'applati' d'un niveau", () => {
    const refValuesArray = ['a', ['b', 'c'], [['d']]];

    const testCase = flattenDepth(refValuesArray);
    const expected = ['a', 'b', 'c', ['d']];

    expect(testCase).toEqual(expected);
  });

  it("renvoie le tableau 'applati' de deux niveaux", () => {
    const refValuesArray = ['a', ['b', 'c'], [['d']]];

    const testCase = flattenDepth(refValuesArray, 2);
    const expected = ['a', 'b', 'c', 'd'];

    expect(testCase).toEqual(expected);
  });
});
