import compact from './compact';

const inputArray = ['a', '', 1, null, 0, {}, ['b'], NaN, [], true, false, undefined, 2];

describe('compact', () => {
  it('aucun tableau passé en argument', () => {
    const testCase = () => {
      compact(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('la fonction supprime bien tous les éléments falsey du tableau', () => {
    const testCase = compact(inputArray);

    const expected = ['a', 1, ['b'], true, 2];

    expect(testCase).toEqual(expected);
  });
});
