import fromPairs from './fromPairs';

describe('fromPairs', () => {
  it('aucun tableau passé en argument', () => {
    const testCase = () => {
      fromPairs(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('renvoie le dernier élément du tableau', () => {
    const refValuesArray = [['a', 1], ['b'], ['c', 2]];

    const testCase = fromPairs(refValuesArray);
    const expected = { a: 1, b: undefined, c: 2 };

    expect(testCase).toEqual(expected);
  });
});
