/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    if (isNegative) {
        x = -x; 
    }

    let xString = x.toString();
    let reverseArray = '';

    for (let i = xString.length - 1; i >= 0; i--) {
        reverseArray += xString[i];
    }

    let reversedNumber = parseInt(reverseArray, 10);

    if (isNegative) {
        reversedNumber = -reversedNumber;
    }

    // Check for 32-bit signed integer overflow
    if (reversedNumber < -(2 ** 31) || reversedNumber > 2 ** 31 - 1) {
        return 0;
    }

    return reversedNumber;
};

