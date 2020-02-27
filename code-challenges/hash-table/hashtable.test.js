'use strict';

const Hashmap = require('./hashtable.js');

let hashmap;

beforeEach(() => {
  hashmap = new Hashmap(1024);
});

describe('testing hash table datastructur',() => {

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hashmap.set('name', 'ahmad');
    expect(hashmap.get('name')).toEqual('ahmad');
  });

  it('Retrieving based on a key returns the value stored',() => {
    hashmap.set('ali', 'amazing person');
    expect(hashmap.get('ali')).toEqual('amazing person');
  });

  it('Successfully handle a collision within the hashtable',() => {
    hashmap.set('ali', 'amazing person');
    hashmap.set('ail', 'wunderful person');
    expect(hashmap.get('ali')).toEqual('amazing person');
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',() => {
    hashmap.set('ali', 'amazing person');
    hashmap.set('ail', 'wunderful person');
    expect(hashmap.get('ail')).toEqual('wunderful person');
  });

  it('Successfully hash a key to an in-range value',() => {
    expect(hashmap.hash('ahmad')).toEqual(417);
  });

});
