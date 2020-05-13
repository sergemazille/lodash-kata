import unionBy from './unionBy';

describe('unionBy', () => {
  it('retourne un tableau de valeurs uniques', () => {
    const arrayValues = [1.2, 1.3, 2.1];
    const arrayValues2 = [3.0, 2.4];
    const iteratee = Math.floor;

    const testCase = unionBy(arrayValues, arrayValues2, iteratee);
    const expected = [1.2, 2.1, 3.0];

    expect(testCase).toEqual(expected);
  });
});
