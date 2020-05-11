import takeRight from './takeRight';

describe('takeRight', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      takeRight(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne les n derniers éléments du tableau', () => {
    const refValuesArray = [1, 2, 3, 4];
    const takeNumber = 2;

    const testCase = takeRight(refValuesArray, takeNumber);
    const expected = [3, 4];

    expect(testCase).toEqual(expected);
  });
  
  it("retourne le dernier élément du tableau si aucun nombre n'est passé en argument", () => {
    const refValuesArray = [1, 2, 3, 4];

    const testCase = takeRight(refValuesArray);
    const expected = [4];

    expect(testCase).toEqual(expected);
  });

  it("retourne un tableau vide si le nombre est inférieur ou égal à zéro", () => {
    const refValuesArray = [1, 2, 3, 4];

    const takeNumber = 0;
    const testCase = takeRight(refValuesArray, takeNumber);
    
    const takeNumber2 = -2;
    const testCase2 = takeRight(refValuesArray, takeNumber2);
    
    const expected = [];

    expect(testCase).toEqual(expected);
    expect(testCase2).toEqual(expected);
  });
});
