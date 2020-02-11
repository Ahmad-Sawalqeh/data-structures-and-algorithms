'use strict';

const AnimalShelter = require('./fifoAnimalShalter.js');

let Animal;

beforeEach(() => {
  Animal = new AnimalShelter() ;
});

describe('testing AnimalShelter()', () => {

  it('enqueue once', () => {
    Animal.enqueue('dog');
    expect(Animal.enqueue('cat')).toEqual('cat');

  });

  it('enqueue multiple times', () => {
    Animal.enqueue('cat');
    Animal.enqueue('dog');
  });

  it('testing dequeue()', () => {
    Animal.enqueue('cat');
    Animal.enqueue('dog');
    expect(Animal.dequeue()).toEqual('cat');
  });

  it('dequeue multiple times', () => {
    Animal.enqueue('cat');
    Animal.enqueue('dog');
    Animal.dequeue();
    expect(Animal.dequeue()).toEqual('dog');
  });

});
