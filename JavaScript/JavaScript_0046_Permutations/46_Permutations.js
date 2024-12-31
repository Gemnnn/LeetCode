/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [[nums[0]]]; 
  
    for (let i = 1; i < nums.length; i++) {
      let newResult = [];
  
      for (let j = 0; j < result.length; j++) {
        let current = result[j]; 
  
        for (let k = 0; k <= current.length; k++) {
          let temp = [];
          let index = 0;
  
          for (let m = 0; m < current.length + 1; m++) {
            if (m === k) {
              temp[m] = nums[i];
            } else {
              temp[m] = current[index];
              index++;
            }
          }
  
          newResult.push(temp);
        }
      }
  
      result = newResult;
    }
  
    return result; 
  };