/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;

    const result = Array(len1 + len2).fill(0);

    for(let i = len1 - 1; i >= 0; i--){
        for(let j = len2 - 1; j >= 0; j--){
            let mul = Number(num1[i]) * Number(num2[j]);
            let sum = result[i + j + 1] + mul;

            if (sum >= 10) {
                result[i + j + 1] = sum % 10; 
                result[i + j] += Math.floor(sum / 10); 
            } else {
                result[i + j + 1] = sum; 
            }
        }
    }

    let startIndex = 0;
    while (result[startIndex] === 0) {
        startIndex++; 
    }

    const resultString = result.slice(startIndex).join('');

    if (resultString.length > 0) {
        return resultString;
    } else {
        return '0'; 
    }
};