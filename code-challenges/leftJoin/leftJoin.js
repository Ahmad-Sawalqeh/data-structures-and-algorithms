'use strict';

// const { Node, LinkedList, Hashmap, } = require('./hash-table.js');

function leftJoin(table1, table2){

  let result = [];
  let keys = Object.keys(table1);
  // let keys2 = Object.keys(table2);

  for (let i = 0; i < keys.length; i++) {
    if (table2[keys[i]]) {
      result.push([keys[i], table1[keys[i]], table2[keys[i]]]);
    } else {
      result.push([keys[i], table1[keys[i]], null]);
    }
  }
  return result;
}

module.exports = leftJoin;
