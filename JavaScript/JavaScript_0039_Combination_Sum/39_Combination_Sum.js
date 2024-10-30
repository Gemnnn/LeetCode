/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    function backtrack(remainingTarget, currentCombination, start) {

        if (remainingTarget === 0) {
            result.push([...currentCombination]); 
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            let candidate = candidates[i];
            
            if (candidate > remainingTarget) {
                break;
            }
            
            currentCombination.push(candidate);
            
            backtrack(remainingTarget - candidate, currentCombination, i);
            
            currentCombination.pop();
        }
    }
    
    candidates.sort((a, b) => a - b);
    
    backtrack(target, [], 0);
    
    return result;
};

// Memory 55.03MB