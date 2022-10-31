const axios = require("axios");

const convert = (numerals) => {
    let romanRange = ["I", "V", "X", "L", "C", "D", "M"];
    let roman = "";
    let digits = String(numerals).split("");

    function repeatRoman(romanKey, numberOfTimes) { // Repeatation on roman keys will be handled here by passing params of need.
        let repeatedRoman = ""
        for (var i = 1; i <= numberOfTimes; i++) {
            repeatedRoman = repeatedRoman + romanKey
        }
        return repeatedRoman
    }

    digits.forEach((digit, i, arr) => { // Looping all digits.
        let length = arr.length;
        let index = 2 * (length - 1 - i); // Index of roman set.
        let currentRoman; // Current Pointing Roman based on digits.

        // Making a logic to determine the equal to below or above the 4 number line and assigning appropriate calculations.
        let romanIndex = Math.floor((Number(digit) + 1) / 5);
        if ((Number(digit) + 1) % 5 === 0) {
            currentRoman = romanRange[index] + romanRange[index + romanIndex];
        }
        else {
            currentRoman = romanIndex ? romanRange[index + romanIndex] + repeatRoman(romanRange[index], Number(digit) - 5) : repeatRoman(romanRange[index], Number(digit));
        }
        roman = roman + currentRoman;
    })

    return roman;
}

module.exports = {
    convert
}