/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length <= 1) {
        return false;
    }

    nums.sort((a,b) => a-b);
    let record = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(record === nums[i]){
            return true;
        } else {
            record = nums[i];
        }

        if (i > 1 && nums[i] === nums[i - 2]) {
            return true;
        }

    }

    return false;
};

// Runtime 132ms, Memory 59.14MB