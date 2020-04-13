import flatten from './flatten';

describe('flatten', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      flatten(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('tableau vide passé en premier argument', () => {
    const refValuesArray = [];

    const testCase = flatten(refValuesArray);
    const expected = refValuesArray;

    expect(testCase).toEqual(expected);
  });

  it("renvoie le tableau 'applati' d'un niveau", () => {
    const refValuesArray = ['a', ['b', 'c'], [['d']]];

    const testCase = flatten(refValuesArray);
    const expected = ['a', 'b', 'c', ['d']];

    expect(testCase).toEqual(expected);
  });
});
