/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordLength = 0;

    for (let i = 0; i < s.length; i++){
        if(s[i] != " "){
            lastWordLength++;
        } else if (i < s.length - 1 && s[i + 1] != " ") { 
            lastWordLength = 0;
        }
    }
    return lastWordLength;
};

// Runtime 56 ms, Memory 48.76 MB