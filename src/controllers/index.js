const axios = require("axios");

const convert = (numerals) => {
    let romanRange = ["I", "V", "X", "L", "C", "D", "M"];
    let roman = "";
    let digits = String(numerals).split("");

    function repeatRoman(romanKey, numberOfTimes) { // Repeatation on roman keys will be handled here by passing params of need.
        let repeatedRoman = ""
        for(var i = 1; i <= numberOfTimes; i++) {
            repeatedRoman = repeatedRoman + romanKey
        }
        return repeatedRoman
    }

    digits.forEach((digit, i, arr) => { // Looping all digits.
        let length = arr.length;
        let index = 2 * (length - 1 - i); // Index of roman set.
        let currentRoman; // Current Pointing Roman based on digits.
        if(Number(digit) >= 4) { // Making a logic to determine the equal to below or above the 4 number line and assigning appropriate calculations.
            if(Number(digit) === 4) {
                currentRoman = romanRange[index] + romanRange[index + 1];
            }
            else {
                currentRoman = romanRange[index + 1] + repeatRoman(romanRange[index], Number(digit) - 5);
            }
        }
        else {
            currentRoman = repeatRoman(romanRange[index], Number(digit))
        }
        roman = roman + currentRoman;
    })

    return roman;
}

module.exports = {
    convert
}