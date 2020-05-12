import takeWhile from './takeWhile';

describe('takeWhile', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      takeWhile(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne les premiers éléments paires', () => {
    const refValuesArray = [2, 4, 3, 4, 6, 8];
    const predicate = (value) => {
      return value % 2 === 0;
    };

    const testCase = takeWhile(refValuesArray, predicate);
    const expected = [2, 4];

    expect(testCase).toEqual(expected);
  });

  it('retourne les premiers objets correspondant au predicate', () => {
    const refValuesArray = [{ x: 0 }, { y: 1 }, { x: 1 }, { x: 2 }];
    const predicate = (o) => {
      return 'x' in o;
    };

    const testCase = takeWhile(refValuesArray, predicate);
    const expected = [{ x: 0 }];

    expect(testCase).toEqual(expected);
  });
});
