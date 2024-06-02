/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let count = 0;

    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[count]){
            count++;
            if (count == needle.length){
                return i + 1 - needle.length;
            }
        } else {
            i = i - count;
            count = 0;
        }
    }

    return -1;
};

// Runtime 51 ms, Memory 49.00 MB