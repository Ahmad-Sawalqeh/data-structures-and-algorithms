'use strict';

function multiBracketValidation(input){

  let matchBrackets = [];

  for (let i = 0; i < input.length; i++) {
    const character = input[i];

    if (character === '(' || character === '[' || character === '{') {
      matchBrackets.push(character);
    } else if (character === ')' || character === ']' || character === '}') {
      const match = matchBrackets.pop();
      if (bracketMap[match] !== character) {
        return false;
      }
    }

  }

  if (!matchBrackets[0]) {
    return false;
  }else{
    return true;
  }

}


console.log(multiBracketValidation('(){}[]'));


module.exports = multiBracketValidation;
