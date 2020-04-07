import differenceBy from './differenceBy';

describe('differenceBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      differenceBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('applique une fonction', () => {
    const testCase = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);

    const expected = [1.2];

    expect(testCase).toEqual(expected);
  });

  it("tabeaux d'objet avec iteratee non pertinent", () => {
    const testCase = differenceBy([{ x: 1 }], [{ x: 1 }], 'z');

    const expected = [{ x: 1 }];

    expect(testCase).toEqual(expected);
  });

  it("tableaux d'objets", () => {
    const testCase = differenceBy(
      [{ x: 2, y: 1 }, { x: 1 }, { x: 3 }, { z: 3 }],
      [{ x: 1 }, { x: 3 }],
      'x'
    );

    const expected = [{ x: 2, y: 1 }, { z: 3 }];

    expect(testCase).toEqual(expected);
  });
});
