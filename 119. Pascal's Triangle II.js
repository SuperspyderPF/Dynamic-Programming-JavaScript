/**
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it 


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 */
 var getRow = function(rowIndex) {
    let row = []
    if(rowIndex < 0){
        return row 
    }
    row.push(1)
    for(let i = 1; i <= rowIndex; i++){
        for(let j = row.length - 1; j > 0; j--){
            row[j] = row[j - 1] + row[j]
        }
        row.push(1)
    }
    return row
};