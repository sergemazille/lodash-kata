import first from './first';

describe('first', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      first(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('tableau vide passé en premier argument', () => {
    const refValuesArray = [];

    const testCase = first(refValuesArray);
    const expected = undefined;

    expect(testCase).toEqual(expected);
  });

  it('renvoie le premier élément du tableau', () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = first(refValuesArray);
    const expected = 'a';

    expect(testCase).toEqual(expected);
  });
});
