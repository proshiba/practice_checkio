"use strict";

function countNeighbours(data, row, col) {
    var innerListNum = col;
    var outerListNum = row;
    var counter = 0;
    let iPrv = innerListNum-1;
    if (iPrv<0){
        iPrv=0;
    }
    let iFwd = innerListNum+1;
    let oPrv = outerListNum-1;
    if (oPrv<0){
        oPrv=0;
    }
    let oFwd = outerListNum+1;
    for( let i in data){
        if(i<oPrv){
            continue;
        }else if(i>oFwd){
            break;
        }

        let outer = data[i];
        for(let j in outer){
            if(j<iPrv){
                continue;
            }else if(j>iFwd){
                break;
            }else if(outerListNum==i && innerListNum==j){
                continue;
            }
            let each = outer[j];
            if(each==1){
                counter++;
            }
        }
    }
    return counter;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 1],
                                  [0, 0, 1, 1, 0]], 4, 4), 2, "3rd example");
    assert.equal(countNeighbours([[1,1,1,0,1,1,1,0,0,1],
                                  [1,0,0,1,1,1,1,1,0,0],
                                  [0,1,0,0,0,0,1,1,1,1],
                                  [1,0,1,1,1,0,1,1,1,1],
                                  [1,1,1,0,1,1,1,1,1,1],
                                  [0,0,0,1,1,1,1,1,1,1],
                                  [1,0,1,1,0,0,0,1,1,1],
                                  [0,0,1,0,0,1,0,0,1,0],
                                  [1,0,0,0,0,1,1,1,0,1],
                                  [1,1,0,1,1,0,1,1,0,0]],5,6), 6, "4th example");

    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
