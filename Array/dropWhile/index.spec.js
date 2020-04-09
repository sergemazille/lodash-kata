import dropWhile from './dropWhile';

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

describe('dropWhile', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      dropWhile(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('aucun predicate passé en deuxième argument', () => {
    const refValuesArray = users;

    const testCase = dropWhile(refValuesArray, null);

    expect(testCase).toEqual(users);
  });

  it('drop tant que active === false', () => {
    const refValuesArray = users;
    const predicate = (value) => {
      return !value.active;
    };

    const testCase = dropWhile(refValuesArray, predicate);
    const expected = [{ user: 'pebbles', active: true }];

    expect(testCase).toEqual(expected);
  });

  it('drop tant que user === barney', () => {
    const refValuesArray = users;
    const predicate = (value) => {
      return value.user === 'barney';
    };

    const testCase = dropWhile(refValuesArray, predicate);
    const expected = [
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];

    expect(testCase).toEqual(expected);
  });
});
