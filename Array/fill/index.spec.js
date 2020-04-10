import fill from './fill';

describe('fill', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      fill(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('remplit complètement un tableau', () => {
    const refValuesArray = [1, 2, 3];
    const value = 'a';

    const testCase = fill(refValuesArray, value);
    const expected = ['a', 'a', 'a'];

    expect(testCase).toEqual(expected);
  });

  it('remplit un tableau depuis un index de départ', () => {
    const refValuesArray = [1, 2, 3];
    const value = 'a';
    const startIndex = 1;

    const testCase = fill(refValuesArray, value, startIndex);
    const expected = [1, 'a', 'a'];

    expect(testCase).toEqual(expected);
  });

  it("remplit un tableau jusqu'à un index de fin", () => {
    const refValuesArray = [1, 2, 3, 4];
    const value = 'a';
    const startIndex = 1;
    const endIndex = 2;

    const testCase = fill(refValuesArray, value, startIndex, endIndex);
    const expected = [1, 'a', 'a', 4];

    expect(testCase).toEqual(expected);
  });
});
