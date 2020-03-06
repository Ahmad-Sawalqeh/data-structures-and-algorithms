'use strict';

const leftJoin = require('./leftJoin.js');

describe('Left-Join', ()=> {

  let a ;
  let b ;
  beforeEach(()=> {
    a = {
      'fond': 'enamored',
      'wrath': 'anger',
      'diligent': 'employed',
      'outfit' : 'garb',
      'guide': 'usher',
    };

    b = {
      'fond': 'averse',
      'wrath': 'delight',
      'diligent': 'idle',
      'guide': 'follow',
      'flow' : 'jam',
    };
  });

  it('return keys of table1',()=>{
    let test = leftJoin(a, b);
    Object.keys(a).map((val, idx) => {
      expect(test[idx].includes(a[val])).toBeTruthy();
    });
  });


  it('return null if key not exist in table2',()=>{
    let test = leftJoin(a, b);
    expect(test[3].includes(null)).toBeTruthy();
  });


  it('adding values for repeated keys',()=>{
    let test = leftJoin(a, b);
    expect(test[0].includes('averse')).toBeTruthy();
  });

});
