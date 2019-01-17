"use strict";

function IsArrayExists(array, value) {
  for (var i =0, len = array.length; i < len; i++) {
    if (value == array[i]) {
      return true;
    }
  }
  return false;
}

function nonUniqueElements(data) {
    var result = []
    var tmp = []
    var dup = []
    for(let i in data){
        let each = data[i];
        if(! IsArrayExists(tmp, each)) {
            tmp.push(each);
        } else {
            dup.push(each);
        }
    }
    for(let i in data) {
        let each = data[i];
        if(IsArrayExists(dup, each)) {
            result.push(each);
        }
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
