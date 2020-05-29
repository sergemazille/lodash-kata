import zipObject from './zipObject';

describe('zipObject', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      zipObject(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('retourne un objet faisant le lien entre les propriétés et leurs valeurs', () => {
    const props = ['a', 'b'];
    const values = [1, 2];

    const testCase = zipObject(props, values);
    const expected = { a: 1, b: 2 };

    expect(testCase).toEqual(expected);
  });

  it("ignore les valeurs 'en trop'", () => {
    const props = ['a'];
    const values = [1, 2];

    const testCase = zipObject(props, values);
    const expected = { a: 1 };

    expect(testCase).toEqual(expected);
  });

  it("retourne une valeur 'undefined' si aucune valeur ne correspond à une propriété", () => {
    const props = ['a', 'b'];
    const values = [1];

    const testCase = zipObject(props, values);
    const expected = { a: 1, b: undefined };

    expect(testCase).toEqual(expected);
  });
});
