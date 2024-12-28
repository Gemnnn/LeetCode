/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binary = n.toString(2);

    while (binary.length < 32) {
        binary = '0' + binary;
    }

    let reversedBinary = '';
    for (let i = binary.length - 1; i >= 0; i--) {
        reversedBinary += binary[i];
    }

    const reversedInteger = parseInt(reversedBinary, 2);

    return reversedInteger >>> 0;
};

// Time Complexity: O(n)
// Space Complexity: O(n)