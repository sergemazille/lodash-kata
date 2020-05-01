import slice from './slice';

describe('slice', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      slice(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne les valeurs incluses dans l'intervalle demandé", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e', 'f'];
    const fromIndex = 1;
    const until = 4; // excluded index

    const testCase = slice(refValuesArray, fromIndex, until);
    const expected = ['b', 'c', 'd'];

    expect(testCase).toEqual(expected);
  });

  it("retourne toute les valeurs si aucun intervalle demandé", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    const testCase = slice(refValuesArray);
    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

    expect(testCase).toEqual(expected);
  });

  it("ne modifie pas le tableau (immutable)", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e', 'f'];
    const fromIndex = 1;
    const until = 4; // excluded index

    slice(refValuesArray, fromIndex, until);
    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

    expect(refValuesArray).toEqual(expected);
  });
});
