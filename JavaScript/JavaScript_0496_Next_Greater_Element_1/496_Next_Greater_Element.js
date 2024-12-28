/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let greaterElements = [];

    for(let i = 0; i < nums1.length; i++){
        let found = false;
        let nextGreater = -1;

        for(let j = 0; j < nums2.length; j++){
            if(nums2[j] === nums1[i]){
                found = true;

                for(let k = j + 1; k < nums2.length; k++){
                    if(nums2[k] > nums2[j]){
                        nextGreater = nums2[k];
                        break;
                    }
                }

                break;
            }
        }

        greaterElements.push(nextGreater);
    }

    return greaterElements;
};

// Runtime 66ms, Memory 51.14MB