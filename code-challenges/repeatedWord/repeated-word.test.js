'use strict';

const repeatedWord = require('./repeated-word.js');

describe('repeatedWord()', () => {

  it('Return the repeated word even if it upper or lower case',()=>{
    expect(repeatedWord('It was a queer, sultry Summer , the summer they electrocuted ')).toEqual('summer');
  });

  it('Return the repeated word',()=>{
    expect(repeatedWord('Once upon a time, there was a brave princess who')).toEqual('a');
  });

  it('Take the first repeated word',()=>{
    expect(repeatedWord('It was the best of times, it was the worst of times, it was the ....')).toEqual('it');
  });

});
