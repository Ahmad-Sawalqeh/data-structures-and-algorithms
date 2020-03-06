'use strict';

function repeatedWord(string){
  let arr = string.toLowerCase().split(' ');
  for(let i = 1 ; i < arr.length ; i++){
    let pre = i - 1 ;
    let current = arr[i];
    while(pre >= 0 ){
      if(current === arr[pre]){
        i = arr.length ;
        return current;
      }
      pre--;
    }
  }
  return 'everything unique!';
}

// let string1 = `Once upon a time, there was a brave princess who...`;
// let string2 = `It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...`;
// let string3 = `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...`;

// console.log('repeatedWord1 => ',repeatedWord(string1));
// console.log('repeatedWord2 => ',repeatedWord(string2));
// console.log('repeatedWord3 => ',repeatedWord(string3));

module.exports = repeatedWord;
