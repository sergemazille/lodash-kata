import differenceWith from './differenceWith';

const isDeepEqual = (arrVal, othVal) => {
  return JSON.stringify(arrVal) === JSON.stringify(othVal);
};

describe('differenceWith', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      differenceWith(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("tableaux d'objets", () => {
    const refValuesArray = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { z: 3 }];
    const excludingValuesArray = [{ x: 1, y: 2 }, { z: 1 }];

    const testCase = differenceWith(refValuesArray, excludingValuesArray, isDeepEqual);

    const expected = [{ x: 2, y: 1 }, { z: 3 }];

    expect(testCase).toEqual(expected);
  });

  it("tableaux de valeurs diverses", () => {
    const refValuesArray = [1, "chat", ['a', 'b', 'c'], null, { z: 3 }];
    const excludingValuesArray = ["chat", null];

    const testCase = differenceWith(refValuesArray, excludingValuesArray, isDeepEqual);

    const expected = [1, ['a', 'b', 'c'], { z: 3 }];

    expect(testCase).toEqual(expected);
  });
});
