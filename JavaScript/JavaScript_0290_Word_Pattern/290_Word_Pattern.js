/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = [];
    let word = "";

    // Add words in the array
    for (let i = 0; i <= s.length; i++) {
        if (i === s.length || s[i] === ' ') {
            if (word.length > 0) {
                words.push(word);
                word = "";
            }
        } else {
            word += s[i];
        }
    }

    // Check the pattern's length & words's length
    if (pattern.length !== words.length) {
        return false;
    }

    let patternMap = {};
    let usedPatterns = [];

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let string = words[i];
        
        if (patternMap[char]) {
            if (patternMap[char] !== string) {
                return false;
            }
        } else {
            let found = false;
            for (let usedPattern of usedPatterns) {
                if (usedPattern === string) {
                    found = true;
                    break;
                }
            }
            if (found) {
                return false;
            }
            
            patternMap[char] = string;
            usedPatterns.push(string);
        }
    }
    return true;
};

// Runtime 46ms, Memory 48.73 MB