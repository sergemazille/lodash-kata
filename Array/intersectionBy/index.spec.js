import intersectionBy from './intersectionBy';

describe('intersectionBy', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      intersectionBy(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('renvoie un tableau contenant les éléments communs à tous les tableaux à la fois', () => {
    const arrayValues = [1.1, 2.4, 3.4, 4.1];
    const arrayValues2 = [2.6, 4.4, 6.1];
    const arrayValues3 = [0.2, 2.7, 6.4, 7.1];

    const iteratee = Math.floor;

    const testCase = intersectionBy(arrayValues, arrayValues2, arrayValues3, iteratee);
    const expected = [2.4];

    expect(testCase).toEqual(expected);
  });
});
