import nth from './nth';

describe('nth', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      nth(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("renvoie l'éléménet à l'index précisé, en partant du début", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e'];
    const index = 2;

    const testCase = nth(refValuesArray, index);
    const expected = 'c';

    expect(testCase).toEqual(expected);
  });
  
  it("renvoie l'éléménet à l'index précisé, en partant de la fin", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e'];
    const index = -2;

    const testCase = nth(refValuesArray, index);
    const expected = 'd';

    expect(testCase).toEqual(expected);
  });
});
