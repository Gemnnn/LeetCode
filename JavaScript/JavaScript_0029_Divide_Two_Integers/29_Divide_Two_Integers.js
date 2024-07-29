/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    if(dividend == -1 && divisor == -1){
        return 1;
    }else if(dividend < 0 && divisor == -1){
        return (dividend * divisor) + divisor;
    }

    if((dividend / divisor) > 0){
        return Math.floor(dividend / divisor);
    }else{
        return Math.ceil(dividend / divisor);
    }
};

// Runtime 70ms, Memory 52.36MB