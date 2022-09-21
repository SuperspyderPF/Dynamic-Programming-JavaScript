/**

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 */
 var generate = function(numRows) {
    let pascalsTriangle = new Array(numRows)
    for(let i = 0; i < numRows; i++){
        let row = new Array(i + 1)
        row[0] = 1
        row[row.length - 1] = 1
        for(let j = 1; j < row.length - 1; j++){
            let rowAbove = pascalsTriangle[i-1]
            row[j] = rowAbove[j] + rowAbove[j-1]
        }
        pascalsTriangle[i] = row
    }
    return pascalsTriangle
    
};
// time & space O(N²)
var generate = function(numRows) {
    
    var arr = []
    for(var row = 0; row < numRows; row++) {
        arr[row] = [];
        for(var col = 0; col < row+1; col++) {
            if(col === 0 || col === row) {
                arr[row][col] = 1;
            } else {
                arr[row][col] = arr[row-1][col-1] + arr[row-1][col];
            }         
        }       
    }   
    return arr;
}
// time & space O(N²)
