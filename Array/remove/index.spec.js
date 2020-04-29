import remove from './remove';

describe('remove', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      remove(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau des éléments retirés', () => {
    const refValuesArray = [1, 2, 3, 4, 5, 6];
    const isEven = (n) => n % 2 === 0;

    const testCase = remove(refValuesArray, isEven);
    const expected = [2, 4, 6];

    expect(testCase).toEqual(expected);
  });

  it('le tableau original est bien modifié (mutation)', () => {
    const refValuesArray = [1, 2, 3, 4, 5, 6];
    const isEven = (n) => n % 2 === 0;

    remove(refValuesArray, isEven);
    const expected = [1, 3, 5];

    expect(refValuesArray).toEqual(expected);
  });

  it('sans predicate, retourne un tableau vide', () => {
    const refValuesArray = [1, 2, 3, 4, 5, 6];

    const testCase = remove(refValuesArray);
    const expected = [];

    expect(testCase).toEqual(expected);
  });
});
