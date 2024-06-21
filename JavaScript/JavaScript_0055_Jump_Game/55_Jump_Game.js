/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maximumJump = nums[0];

    for(let i = 0; i < nums.length; i++){
        if (i > maximumJump) {
            return false;
        }

        if (i + nums[i] > maximumJump) {
            maximumJump = i + nums[i];
        }

        if (maximumJump >= nums.length - 1) {
            return true;
        }
    }

    return false;
};

// RunTime 52ms, Memory 52.74MB