/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = "";
    let word = "";
    let words = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word += s[i];
        } else {
            if (word.length > 0) {
                words.push(word);
                word = "";
            }
        }
    }
    
    if (word.length > 0) {
        words.push(word);
    }
    
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i > 0) {
            result += " ";
        }
    }
    
    return result;
};

// Runtime 55ms, Memory 50.47 MB