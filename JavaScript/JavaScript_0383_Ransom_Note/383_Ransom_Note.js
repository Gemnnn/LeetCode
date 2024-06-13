/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length === 0) {
        return true;
    }

    let magazineCount = {};

    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i];
        if (magazineCount[char]) {
            magazineCount[char]++;
        } else {
            magazineCount[char] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (!magazineCount[char] || magazineCount[char] === 0) {
            return false;
        }
        magazineCount[char]--;
    }

    return true;
};

// Runtime 67ms, Memory 51.84MB