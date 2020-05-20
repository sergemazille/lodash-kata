import unzipWith from './unzipWith';

describe('unzipWith', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      unzipWith(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un tableau de valeurs regroupées unzippées', () => {
    const refValuesArray = [
      [1, 10, 100],
      [2, 20, 200],
      [3, 30, 300],
    ];

    const iteratee = (values) => {
      return values.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
    }

    const testCase = unzipWith(refValuesArray, iteratee);
    const expected = [6, 60, 600];

    expect(testCase).toEqual(expected);
  });

  it('retourne un tableau de valeurs regroupées unzippées, non équilibrées', () => {
    const refValuesArray = [
      [1],
      [2, 20],
      [3, 30, 300],
    ];

    const iteratee = (values) => {
      return values.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0);
    }

    const testCase = unzipWith(refValuesArray, iteratee);
    const expected = [6, 50, 300];

    expect(testCase).toEqual(expected);
  });
});
