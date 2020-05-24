import isEqual from 'lodash/isEqual';
import xorWith from './xorWith';

describe('xorWith', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      xorWith(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it("retourne un tableau contenant les éléments su deuxième tableau qui n'existaient pas et ne contenant plus les éléments qui existaient déjà", () => {
    const refValuesArray = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const valuesToToggle = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    const comparator = isEqual;

    const testCase = xorWith(refValuesArray, valuesToToggle, comparator);
    const expected = [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

    expect(testCase).toEqual(expected);
  });

  it('ne tient pas compte des doublons du deuxième tableau', () => {
    const refValuesArray = ['javascript', 'php'];
    const valuesToToggle = ['php', 'c#', 'php', 'c#'];
    const comparator = isEqual;

    const testCase = xorWith(refValuesArray, valuesToToggle, comparator);
    const expected = ['javascript', 'c#'];

    expect(testCase).toEqual(expected);
  });
});
