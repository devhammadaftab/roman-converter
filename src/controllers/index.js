const repeat = (romanKey, numberOfTimes) => { // Repeatation on roman keys will be handled here by passing params of need.
    let repeatedRoman = ""
    for (var i = 1; i < numberOfTimes; i++) {
        repeatedRoman = repeatedRoman + romanKey
    }
    return repeatedRoman
}

const convert = (numerals) => {
    let romanRange = ["I", "V", "X", "L", "C", "D", "M"];
    let roman = "";
    let digits = String(numerals).split("");

    digits.forEach((digit, i, arr) => { // Looping all digits.
        if (Number(digit)) {
            let length = arr.length;
            let index = 2 * (length - 1 - i); // Index of roman set.

            let romanIndex = Math.floor((Number(digit) + 1) / 5);
            let currentRoman = romanRange[index + romanIndex];

            if ((Number(digit) + 1) % 5 === 0) {
                currentRoman = romanRange[index] + currentRoman;
            }
            else {
                let iteration = (Math.abs((romanIndex * 4) - digit));
                currentRoman = currentRoman + repeat(romanRange[index], iteration)
            }
            roman = roman + currentRoman;
        }
    })

    return roman;
}

module.exports = {
    convert
}