/* eslint-disable no-unused-expressions */
'use strict';

class Animal{
  constructor(animal, next = null){
    this.animal = animal,
    this.next = next;
  }

}

class AnimalShelter{
  constructor(front = null, rear = null){
    this.front = front,
    this.rear = rear;
  }

  enqueue(animal){
    let currentAnimal = new Animal(animal);
    let currNode = this.front;
    if(!currNode){
      this.front = currentAnimal;
      this.rear = currentAnimal;
      return currentAnimal.animal ;
    }else{
      this.rear.next = currentAnimal;
      this.rear = this.rear.next ;
      return currentAnimal.animal ;
    }
  }

  dequeue(){
    let currNode = this.front;
    if(!currNode){
      return null;
    }else{
      let animal = this.front.animal ;
      this.front = this.front.next ;
      return animal ;
    }
  }

}

module.exports = AnimalShelter;
