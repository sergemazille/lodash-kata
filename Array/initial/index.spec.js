import initial from './initial';

describe('initial', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      initial(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("renvoie un tableau vide si le tableau d'entrée est vide", () => {
    const refValuesArray = [];

    const testCase = initial(refValuesArray);
    const expected = [];

    expect(testCase).toEqual(expected);
  });

  it("renvoie les éléments du tableau à l'exception du dernier", () => {
    const refValuesArray = ['a', 'b', 'c', 'd'];

    const testCase = initial(refValuesArray);
    const expected = ['a', 'b', 'c'];

    expect(testCase).toEqual(expected);
  });
});
