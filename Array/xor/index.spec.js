import xor from './xor';

describe('xor', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      xor(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne un tableau contenant les éléments su deuxième tableau qui n'existaient pas et ne contenant plus les éléments qui existaient déjà", () => {
    const refValuesArray = ['javascript', 'php'];
    const valuesToToggle = ['php', 'c#'];

    const testCase = xor(refValuesArray, valuesToToggle);
    const expected = ['javascript', 'c#'];

    expect(testCase).toEqual(expected);
  });

  it('ne tient pas compte des doublons du deuxième tableau', () => {
    const refValuesArray = ['javascript', 'php'];
    const valuesToToggle = ['php', 'c#', 'php', 'c#'];

    const testCase = xor(refValuesArray, valuesToToggle);
    const expected = ['javascript', 'c#'];

    expect(testCase).toEqual(expected);
  });
});
