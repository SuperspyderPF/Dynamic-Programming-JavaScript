'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(n, c) {
    const store = new Array(n + 1).fill(0)
    store[0] = 1 
    for(const coin of c){
        for (let total = coin; total < store.length; total++){
            const remainder = total - coin
            store[total] += store[remainder]
        }
    }
    return store[n]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

    const ways = getWays(n, c);

    ws.write(ways + '\n');

    ws.end();
}
///this solution of hacker rank also works in algoexpert 

function numberOfWaysToMakeChange(n, denoms) {
    const store = new Array(n + 1).fill(0)
    store[0] = 1
    for(const coin of denoms){
      for(let total = coin; total < store.length; total++){
        const remainder = total - coin 
        store[total] += store[remainder]
      }
    }
    return store[n]
  }
  
  // Do not edit the line below.
  exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
  