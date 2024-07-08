/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = "";

    let thousandQuotient = (num - (num % 1000)) / 1000; 

    for(let i = 0; i < thousandQuotient; i++){
        roman += "M";
    }

    num = num % 1000;

    let hundredQuotient = (num - (num % 100)) / 100;

    if(0 < hundredQuotient && hundredQuotient < 4){
        for(let i = 0; i < hundredQuotient; i++){
            roman += "C";
        }
    } else if(hundredQuotient == 4){
        roman += "CD";
    } else if(hundredQuotient == 5){
        roman += "D";
    } else if(5 < hundredQuotient && hundredQuotient < 9){
        roman += "D";
        hundredQuotient -= 5;
        for(let i = 0; i < hundredQuotient; i++){
            roman += "C";
        }
    } else if(hundredQuotient == 9){
        roman += "CM";
    }

    num = num % 100;

    let tenQuotient = (num - (num % 10)) / 10;

    if(0 < tenQuotient && tenQuotient < 4){
        for(let i = 0; i < tenQuotient; i++){
            roman += "X";
        }
    } else if(tenQuotient == 4){
        roman += "XL";
    } else if(tenQuotient == 5){
        roman += "L";
    } else if(5 < tenQuotient && tenQuotient < 9){
        roman += "L";
        tenQuotient -= 5;
        for(let i = 0; i < tenQuotient; i++){
            roman += "X";
        }
    } else if(tenQuotient == 9){
        roman += "XC";
    }

    num = num % 10;

    let quotient = num;

    if(0 < quotient && quotient < 4){
        for(let i = 0; i < quotient; i++){
            roman += "I";
        }
    } else if(quotient == 4){
        roman += "IV";
    } else if(quotient == 5){
        roman += "V";
    } else if(5 < quotient && quotient < 9){
        roman += "V";
        quotient -= 5;
        for(let i = 0; i < quotient; i++){
            roman += "I";
        }
    } else if(quotient == 9){
        roman += "IX";
    }

    return roman;
};

// Runtime 87ms, Memory 53.6MB 