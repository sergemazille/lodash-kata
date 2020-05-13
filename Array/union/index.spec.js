import union from './union';

describe('union', () => {
  it('retourne un tableau de valeurs uniques', () => {
    const arrayValues = [1, 2, 3];
    const arrayValues2 = [3, 4, 5];

    const testCase = union(arrayValues, arrayValues2);
    const expected = [1, 2, 3, 4, 5];

    expect(testCase).toEqual(expected);
  });

  it("l'ordre est respecté", () => {
    const arrayValues = [5, 4, 3];
    const arrayValues2 = [1, 2, 3];

    const testCase = union(arrayValues, arrayValues2);
    const expected = [5, 4, 3, 1, 2];

    expect(testCase).toEqual(expected);
  });
});
