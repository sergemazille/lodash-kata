import drop from './drop';

describe('drop', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      drop(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('second argument null', () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = () => {
      drop(refValuesArray, null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("pas de précision du nombre d'éléments à supprimer", () => {
    const refValuesArray = ['a', 'b', 'c'];

    const testCase = drop(refValuesArray);

    const expected = ['b', 'c'];

    expect(testCase).toEqual(expected);
  });

  it('supprime 0 élément', () => {
    const refValuesArray = ['a', 'b', 'c'];
    const numberToDrop = 0;

    const testCase = drop(refValuesArray, numberToDrop);

    const expected = ['a', 'b', 'c'];

    expect(testCase).toEqual(expected);
  });

  it("supprime moins d'éléments que le nombre total d'éléments", () => {
    const refValuesArray = ['a', 'b', 'c'];
    const numberToDrop = 2;

    const testCase = drop(refValuesArray, numberToDrop);

    const expected = ['c'];

    expect(testCase).toEqual(expected);
  });

  it("supprime plus d'éléments que le nombre total d'éléments", () => {
    const refValuesArray = ['a', 'b', 'c'];
    const numberToDrop = 4;

    const testCase = drop(refValuesArray, numberToDrop);

    const expected = [];

    expect(testCase).toEqual(expected);
  });
});
