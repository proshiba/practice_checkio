"use strict";

function mostWanted(data) {
    var rex = new RegExp(/[a-z]/);
    var lower = data.toLowerCase().split("");
    var mostChar = {};
    for( let i in lower ){
        let each = lower[i];
        if(rex.test(each)){
            if(each in mostChar){
                mostChar[each]++;
            } else {
                mostChar[each] = 0;
            }
        }
    }
    var result = null;
    var max = null;
    for(let key in mostChar){
        let each_value = mostChar[key];
        if(!result){
            result = key;
            max = each_value;
        } else {
            if(max<each_value){
                result=key;
                max=each_value;
            }else if(max==each_value){
                if(key<result){
                    result=key;
                    max=each_value;
                }
            }
        }
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
