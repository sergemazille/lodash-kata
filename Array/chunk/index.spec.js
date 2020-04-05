import chunk from './chunk';

const inputArray = ['a', 'b', 'c', 'd', 'e', 'f'];

describe('chunk', () => {
  it('chunk de zero renvoie un tableau vide', () => {
    const testCase = chunk(inputArray, 0);

    expect(testCase).toEqual([]);
  });

  it('aucun tableau passé en argument', () => {
    const testCase = () => {
      chunk(null, 0);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('taille de chunk non précisée', () => {
    const testCase = chunk(inputArray);

    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

    expect(testCase).toEqual(expected);
  });

  it("chunk du nombre d'éléments du tableau ou plus", () => {
    const testCase = chunk(inputArray, 6);
    const testCase2 = chunk(inputArray, 7);

    const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

    expect(testCase).toEqual(expected);
    expect(testCase2).toEqual(expected);
  });

  it('chunk de 1', () => {
    const testCase = chunk(inputArray, 1);

    const expected = [['a'], ['b'], ['c'], ['d'], ['e'], ['f']];

    expect(testCase).toEqual(expected);
  });

  it('chunk de 2', () => {
    const testCase = chunk(inputArray, 2);

    const expected = [
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f'],
    ];

    expect(testCase).toEqual(expected);
  });

  it('chunk de 3', () => {
    const testCase = chunk(inputArray, 3);

    const expected = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
    ];

    expect(testCase).toEqual(expected);
  });

  it('chunk de 4', () => {
    const testCase = chunk(inputArray, 4);

    const expected = [
      ['a', 'b', 'c', 'd'],
      ['e', 'f'],
    ];

    expect(testCase).toEqual(expected);
  });

  it('chunk de 5', () => {
    const testCase = chunk(inputArray, 5);

    const expected = [['a', 'b', 'c', 'd', 'e'], ['f']];

    expect(testCase).toEqual(expected);
  });
});
