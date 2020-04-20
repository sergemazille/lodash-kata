import lastIndexOf from './lastIndexOf';

describe('lastIndexOf', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      lastIndexOf(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("recherche l'index de la première valeur trouvée, en partant de la fin", () => {
    const refValuesArray = [1, 3, 4, 5, 3, 6];
    const valueToSearchIndexFor = 3;

    const testCase = lastIndexOf(refValuesArray, valueToSearchIndexFor);
    const expected = 4;

    expect(testCase).toEqual(expected);
  });

  it('recherche en précisant un indice de départ', () => {
    const refValuesArray = [1, 2, 3, 4, 3, 6];
    const valueToSearchIndexFor = 3;
    const fromIndex = 3;

    const testCase = lastIndexOf(
      refValuesArray,
      valueToSearchIndexFor,
      fromIndex
    );
    const expected = 2;

    expect(testCase).toEqual(expected);
  });
});
