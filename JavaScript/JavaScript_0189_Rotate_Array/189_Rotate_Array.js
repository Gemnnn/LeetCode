/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Reduce k to be within the bounds of the array length
    k = k % nums.length;
    let copy = new Array(nums.length);
    
    for (let i = 0; i < nums.length; i++) {
        if (k + i < nums.length) {
            copy[i + k] = nums[i];
        } else if (k + i >= nums.length) {
            copy[k + i - nums.length] = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = copy[i];
    }
};

// Runtime 69ms, Memory 59.64 MB