'use strict';

class Animal{
  constructor(animal, next = null){
    this.animal = animal, 
  }
}

class AnimalShelter{
  constructor(head = null, front = null, rear = null){
    this.head = head,
    this.front = front,
    this.rear = rear,
  }

  enqueue(animal){
    let currentAnimal = new Animal(animal);
    let currNode = this.head;
    if(!currNode){
      this.head = currentAnimal;
      this.front = currentAnimal;
      this.rear = currentAnimal;
    }
    while(currNode){

    }
  }

  dequeue(pref){

  }

}

module.exports = AnimalShelter;
