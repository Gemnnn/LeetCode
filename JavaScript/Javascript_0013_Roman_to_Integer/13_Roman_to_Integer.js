/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] ===  "I"){
            value += 1;
        }else if(s[i] === "V"){
            value += 5;
        }else if(s[i] === "X"){
            value += 10;
        }else if(s[i] === "L"){
            value += 50;
        }else if(s[i] === "C"){
            value += 100;
        }else if(s[i] === "D"){
            value += 500;
        }else if(s[i] === "M"){
            value += 1000;
        }

        let subtractionWords = s[i] + s[i + 1];

        if(subtractionWords == "IV" || subtractionWords == "IX"){
            value -= 2;
        } 
        if(subtractionWords == "XL" || subtractionWords == "XC"){
            value -= 20;
        }
        if(subtractionWords == "CD" || subtractionWords == "CM"){
            value -= 200;
        }
    }

    return value;
};

// Runtime 98 ms, Memory 54.56 MB