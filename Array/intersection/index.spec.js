import intersection from './intersection';

describe('intersection', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      intersection(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('renvoie un tableau contenant les éléments communs à tous les tableaux à la fois', () => {
    const arrayValues = ['a', 'b', 'c', 1];
    const arrayValues2 = ['a', 1, 'd', 2];
    const arrayValues3 = [1, 'a', 2, 'b', 3];

    const testCase = intersection(arrayValues, arrayValues2, arrayValues3);
    const expected = ['a', 1];

    expect(testCase).toEqual(expected);
  });
});
