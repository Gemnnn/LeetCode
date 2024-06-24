/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }

    let startIndex = 0;
    let currentIndex = 0;
    let result = [];


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            currentIndex++;
        } else {
            if (startIndex === currentIndex) {
                result.push(nums[startIndex] + "");
            } else {
                result.push(nums[startIndex] + "->" + nums[currentIndex]);
            }
            startIndex = currentIndex = i + 1;
        }
    }

    return result;    
};

// Runtime 42ms, Memory 49.18MB