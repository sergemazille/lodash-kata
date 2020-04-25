import pull from './pull';

describe('pull', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      pull(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("renvoie l'éléménet à l'index précisé, en partant du début", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'];
    const valuesToRemove = ['a', 'c'];

    const testCase = pull(refValuesArray, ...valuesToRemove);
    const expected = ['b', 'd', 'e', 'b'];

    expect(testCase).toEqual(expected);
  });

  it("le tableau est bien modifié (mutation)", () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'];
    const valuesToRemove = ['a', 'c'];
    pull(refValuesArray, ...valuesToRemove);
    
    const expected = ['b', 'd', 'e', 'b'];
    expect(refValuesArray).toEqual(expected);
  });
});
