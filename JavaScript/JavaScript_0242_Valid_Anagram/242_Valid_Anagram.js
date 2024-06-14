/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let wordsCount = {};

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(wordsCount[char]){
            wordsCount[char]++;
        } else{
            wordsCount[char] = 1;
        }
    }

    for(let i = 0; i < t.length; i++){
        let char = t[i];
        if (wordsCount[char]){
            wordsCount[char]--;
            if (wordsCount[char] < 0){
                return false;
            }
        } else{
            return false;
        }
    }

    for (let char in wordsCount){
        if(wordsCount[char] !== 0){
            return false;
        }
    }

    return true;

};

// Runtime 69ms, Memory 51.40MB