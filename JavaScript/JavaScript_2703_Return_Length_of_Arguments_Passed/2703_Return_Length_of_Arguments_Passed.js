
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    var count = 0;
    for(var i = 0; i < args.length; i++){
        count = i + 1
    }
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**
 Runtime 46ms, Memory 49.36MB
 */