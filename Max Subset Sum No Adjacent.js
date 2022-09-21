/*
There is unsorted integer array, return a maximum sum of non adjacent elements.

example>
[5, 20, 15, -2, 18] => 20 + 18 = 38
[4, 1, 6, 3, 2] => 4 + 6 + 2 = 12
*/

function maxSubsetSumNoAdjacent(array) {
    let [rob1, rob2] = [0, 0]
    for(let n of array){
      let temp = Math.max(rob1 + n, rob2)
      rob1 = rob2 
      rob2 = temp 
    }
    return rob2
  }
  
  // time O(log n ) space O(log n)
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
  