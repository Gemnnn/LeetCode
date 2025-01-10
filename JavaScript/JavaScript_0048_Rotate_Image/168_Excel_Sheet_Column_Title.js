/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    while (columnNumber > 0) {
        columnNumber--; 
        const remainder = columnNumber % 26; 
        result = map[remainder] + result;
        columnNumber = Math.floor(columnNumber / 26); 
    }

    return result;
};