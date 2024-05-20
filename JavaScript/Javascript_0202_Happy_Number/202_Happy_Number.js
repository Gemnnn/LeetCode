/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {

    function getSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = (num - digit) / 10;
        }
        return sum;
    }

    let seen = [];
    
    function isInArray(num, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return true;
            }
        }
        return false;
    }

    while (n !== 1) {
        if (isInArray(n, seen)) {
            return false; 
        }
        seen[seen.length] = n; 
        n = getSumOfSquares(n);
    }

    return true;
}

// Runtime 59 ms, Memory 49.24 MB