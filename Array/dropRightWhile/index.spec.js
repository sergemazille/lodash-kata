import dropRightWhile from './dropRightWhile';

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

describe('dropRightWhile', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      dropRightWhile(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('aucun predicate passé en deuxième argument', () => {
    const refValuesArray = users;

    const testCase = dropRightWhile(refValuesArray, null);

    expect(testCase).toEqual(users);
  });

  it('drop tant que active === true', () => {
    const refValuesArray = users;
    const predicate = (value) => {
      return value.active;
    };

    const testCase = dropRightWhile(refValuesArray, predicate);
    const expected = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
    ];

    expect(testCase).toEqual(expected);
  });

  it('drop tant que user === pebbles ou user === fred', () => {
    const refValuesArray = users;
    const predicate = (value) => {
      return value.user === 'pebbles' || value.user === 'fred';
    };

    const testCase = dropRightWhile(refValuesArray, predicate);
    const expected = [{ user: 'barney', active: false }];

    expect(testCase).toEqual(expected);
  });
});
