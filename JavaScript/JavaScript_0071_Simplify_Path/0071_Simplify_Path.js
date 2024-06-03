/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let components = path.split('/');
    let stack = [];
    
    for (let component of components) {
        if (component === '' || component === '.') {
            continue;
        } else if (component === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
    }
    
    let simplifiedPath = '/' + stack.join('/');
    return simplifiedPath;
};

// Runtime 57 ms, Memory 50.09 MB