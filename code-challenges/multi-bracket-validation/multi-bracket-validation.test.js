/* eslint-disable strict */
'user strict';

const sniper = require('./multi-bracket-validation.js');

describe('Multi Bracket Validation', ()=> {

  it('differant brackes' , ()=> {
    expect(sniper('[()][(){}}')).toEqual(false);
    expect(sniper('{{}(())[][[})(]()]')).toEqual(true);
  });

  it('differant brackes with letters' , ()=> {
    expect(sniper('{}{Code}[Fellows](())')).toEqual(true);
    expect(sniper('()[[Extra Characters]]')).toEqual(true);
  });

});
