import join from './join';

describe('join', () => {
  it('aucun tableau passé en premier argument', () => {
    const testCase = () => {
      join(null);
    };

    expect(testCase).toThrow(TypeError);
  });

  it('renvoie les éléments du tableau sous forme de chaîne de caractères', () => {
    const refValuesArray = ['l', 'e', 't', 't', 'r', 'e', 's'];
    const separator = '-';
    
    const testCase = join(refValuesArray, separator);
    const expected = 'l-e-t-t-r-e-s';

    expect(testCase).toEqual(expected);
  });

  
  it('renvoie les éléments du tableau sous forme de chaîne de caractères sans préciser le séparateur', () => {
    const refValuesArray = ['l', 'e', 't', 't', 'r', 'e', 's'];
    
    const testCase = join(refValuesArray);
    const expected = 'l,e,t,t,r,e,s';

    expect(testCase).toEqual(expected);
  });
});
