/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    //If only 1 row, return the input string as-is
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let zigzagArray = new Array(numRows).fill("");
    let rowNumber = 0;
    let upDown = true;

    for(let i = 0; i < s.length; i++){
        zigzagArray[rowNumber] += s[i];
        if (upDown === true){
            rowNumber++;
        }else{
            rowNumber--;
        }

        if (rowNumber == numRows -1){
            upDown = false;
        } else if (rowNumber == 0){
            upDown = true;
        }
    }

    return zigzagArray.join("");
};

// Runtime 4ms, Memory 54.49MB