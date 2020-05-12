import takeRightWhile from './takeRightWhile';

describe('takeRightWhile', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      takeRightWhile(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne les derniers éléments paires', () => {
    const refValuesArray = [1, 2, 3, 4, 6, 8];
    const predicate = (value) => {
      return value % 2 === 0;
    };

    const testCase = takeRightWhile(refValuesArray, predicate);
    const expected = [4, 6, 8];

    expect(testCase).toEqual(expected);
  });

  it('retourne les derniers objets correspondant au predicate', () => {
    const refValuesArray = [{ x: 0 }, { y: 1 }, { x: 1 }, { x: 2 }];
    const predicate = (o) => {
      return 'x' in o;
    };

    const testCase = takeRightWhile(refValuesArray, predicate);
    const expected = [{ x: 1 }, { x: 2 }];

    expect(testCase).toEqual(expected);
  });
});
