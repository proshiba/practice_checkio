"use strict";

function weakPoint(matrix){
    var vsum = {};
    var lsum = {};
    var vmax = matrix.length-1;
    var lmax = matrix[0].length-1;
    var weak = [];
    
    for(let j=0; j <= lmax; j++){
        vsum[j]=0;
    }
    for(let i in matrix){
        let each_row = matrix[i]
        lsum[i]=0;
        for(let j in each_row ){
            let each=each_row[j];
            lsum[i]+=each;
            vsum[j]+=each;
        }
    }
    let most_weak=null;
    for(let i=0; i <= vmax; i++){
        let each_l = lsum[i];
        for(let j=0; j <= lmax; j++){
            let each_v = vsum[j];
            let curr_weak = each_l+each_v;
            if(!most_weak || most_weak>curr_weak){
                most_weak=curr_weak;
                weak=[i,j];
            }
        }
    }
    console.log("finish -> "+weak);
    return weak
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

