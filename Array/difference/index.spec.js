import difference from './difference';

const refValuesArray = ['a', 'b', 'c', 1, 2, 3];
const excludingValuesArray = ['b', 'c', 2];

describe('difference', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      difference(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('la fonction renvoie le premier tableau expurgé des valeurs présentes dans le deuxième tableau', () => {
    const testCase = difference(refValuesArray, excludingValuesArray);

    const expected = ['a', 1, 3];

    expect(testCase).toEqual(expected);
  });

  it("le tableau n'est pas filtré s'il n'y a pas de deuxième argument", () => {
    const testCase = difference(refValuesArray);

    expect(testCase).toEqual(refValuesArray);
  });
});
