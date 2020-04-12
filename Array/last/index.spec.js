import last from './last';

describe('last', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      last(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('tableau vide passé en premier argument', () => {
    const refValuesArray = [];

    const testCase = last(refValuesArray);
    const expected = undefined;

    expect(testCase).toEqual(expected);
  });

  it('renvoie le dernier élément du tableau', () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = last(refValuesArray);
    const expected = 'c';

    expect(testCase).toEqual(expected);
  });
});
