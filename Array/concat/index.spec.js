import concat from './concat';

const array = ['a', 'b'];
const array2 = [1];
const array3 = [[2]];
const value = 3;

describe('concat', () => {
  it('la fonction renvoie un tableau de tableaux et de valeurs', () => {
    const testCase = concat(array, array2, array3, value);

    const expected = ['a', 'b', 1, [2], 3];

    expect(testCase).toEqual(expected);
  });
});
