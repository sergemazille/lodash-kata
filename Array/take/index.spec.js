import take from './take';

describe('take', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      take(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne les n premiers éléments du tableau', () => {
    const refValuesArray = [1, 2, 3, 4];
    const takeNumber = 2;

    const testCase = take(refValuesArray, takeNumber);
    const expected = [1, 2];

    expect(testCase).toEqual(expected);
  });
  
  it("retourne le premier élément du tableau si aucun nombre n'est passé en argument", () => {
    const refValuesArray = [1, 2, 3, 4];

    const testCase = take(refValuesArray);
    const expected = [1];

    expect(testCase).toEqual(expected);
  });
});
