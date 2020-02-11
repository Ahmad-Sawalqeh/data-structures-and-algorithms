'use strict';

function multiBracketValidation(input){

  let square = [], carly = [], pranthises = [];

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    if (character === '(' || character === ')') {
      pranthises.push(character);
    }else if(character === '[' || character === ']'){
      square.push(character);
    }else if(character === '{' || character === '}'){
      carly.push(character);
    }

  }

  if((square.length % 2 === 0 ) && (carly.length % 2 === 0 ) && (pranthises.length % 2 === 0 )){
    return true;
  }else{
    return false;
  }

}

module.exports = multiBracketValidation;
