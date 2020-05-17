import isEqual from 'lodash/isEqual';
import uniqWith from './uniqWith';

describe('uniqWith', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      uniqWith(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs uniques', () => {
    const refValuesArray = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ];
    const comparator = isEqual;

    const testCase = uniqWith(refValuesArray, comparator);
    const expected = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];

    expect(testCase).toEqual(expected);
  });
});
