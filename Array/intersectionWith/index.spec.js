import intersectionWith from './intersectionWith';

describe('intersectionWith', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      intersectionWith(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('renvoie un tableau contenant les éléments communs à tous les tableaux à la fois', () => {
    const arrayValues = [
      { x: 1, y: 2 },
      { x: 2, z: 3 },
      { y: 2, z: 1 },
    ];
    const arrayValues2 = [
      { x: 1, y: 2 },
      { x: 1, z: 3 },
      { x: 2, y: 1 },
    ];
    const arrayValues3 = [
      { x: 1, y: 2 },
      { x: 4, y: 3 },
      { y: 2, z: 1, y: 1 },
    ];

    const comparator = (a, b) => {
      return JSON.stringify(a) === JSON.stringify(b);
    };

    const testCase = intersectionWith(
      arrayValues,
      arrayValues2,
      arrayValues3,
      comparator
    );
    const expected = [{ x: 1, y: 2 }];

    expect(testCase).toEqual(expected);
  });

  it('comparaison non stricte', () => {
    const arrayValues = [1, 2, 3];
    const arrayValues2 = ['1', 4, 5];
    const arrayValues3 = [1, 6, 7];

    const comparator = (a, b) => {
      return a == b;
    };

    const testCase = intersectionWith(
      arrayValues,
      arrayValues2,
      arrayValues3,
      comparator
    );
    const expected = [1];

    expect(testCase).toEqual(expected);
  });
});
