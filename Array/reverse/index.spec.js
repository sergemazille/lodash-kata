import reverse from './reverse';

describe('reverse', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      reverse(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau inversé', () => {
    const refValuesArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    const testCase = reverse([refValuesArray]);
    const expected = ['f', 'e', 'd', 'c', 'b', 'a'];

    expect(testCase).toEqual(expected);
  });
});
