/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0){
        return "";
    }

    let prefix = strs[0];
    let prefixLength = prefix.length;

    for (let i = 1; i < strs.length; i++){
        let currentStr = strs[i];
        let j = 0; 

        while (prefix[j] === currentStr[j] && j < prefixLength && j < currentStr.length){
            j++;
        }

        prefixLength = j;

        if (prefixLength === 0){
            return "";
        }
    }

    let commonPrefix = "";
    for (let i = 0; i < prefixLength; i++){
        commonPrefix += prefix[i];
    }
    
    return commonPrefix;
}

// Runtime 69 ms, Memory 50.42 MB