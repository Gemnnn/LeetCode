/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    let count = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            // Skip duplicates
            continue;
        }

        if (i > 0 && nums[i] == nums[i - 1] + 1) {
            count++;
        } else {
            count = 1; // Start a new sequence
        }

        result = Math.max(result, count);
    }

    return result;
};

// Runtime 92ms, Memory 60.15MB