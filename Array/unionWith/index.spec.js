import isEqual from 'lodash/isEqual';
import unionWith from './unionWith';

describe('unionWith', () => {
  it('retourne un tableau de valeurs uniques', () => {
    const objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
    ];

    const others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ];

    const others2 = [
      { x: 1, y: 1 },
      { x: 3, y: 3 },
    ];

    const comparator = isEqual;

    const testCase = unionWith(objects, others, others2, comparator);
    const expected = [
      { x: 1, y: 2 },
      { x: 3, y: 3 },
    ];

    expect(testCase).toEqual(expected);
  });
});
