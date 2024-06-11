/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let resultIndex = 0;

    for(let i = 0; i < nums.length; i++){
        let isDuplicate = false;

        for(let j = 0; j < resultIndex; j++){
            if (nums[i] === nums[j]){
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate){
            nums[resultIndex] = nums[i];
            resultIndex++;
        }
    }

    return resultIndex;
};

// Runtime 56ms, Memory 51.64Mb 