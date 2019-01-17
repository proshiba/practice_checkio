"use strict";

function sort_ary(data) {
    data.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    return data
}

function median(data) {
    var result = 0;
    sort_ary(data);
    let central = Math.ceil(data.length / 2);
    if(data.length % 2 == 1){
        result = data[central-1]
    } else {
        let tmp1 = data[central-1];
        let tmp2 = data[central];
        result = (tmp1+tmp2) / 2;
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
