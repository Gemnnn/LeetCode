/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = 0;

    for (let i = 0; i < nums.length; i++){
        if (count === 0){
            candidate = nums[i];
            count = 1;
        } else if (candidate === nums[i]){
            count++
        } else {
            count--
        }
    }
    return candidate;
};

// Runtime 50 ms, Memory 50.96 MB