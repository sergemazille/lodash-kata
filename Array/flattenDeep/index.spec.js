import flattenDeep from './flattenDeep';

describe('flattenDeep', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      flattenDeep(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('tableau vide passé en premier argument', () => {
    const refValuesArray = [];

    const testCase = flattenDeep(refValuesArray);
    const expected = refValuesArray;

    expect(testCase).toEqual(expected);
  });

  it("renvoie le tableau 'applati' de deux niveaux", () => {
    const refValuesArray = ['a', ['b', 'c'], [['d', ['e', ['f']]]]];

    const testCase = flattenDeep(refValuesArray);
    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

    expect(testCase).toEqual(expected);
  });
});
