/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let pointer = s.length - 1;
    let sum = 0;
    while (pointer >= 0) {
        switch (s[pointer]) {
            case 'I':
                sum += 1;
                break;
                break;
            case 'V':
                if (s[pointer - 1] && s[pointer - 1] === 'I') {
                    sum += 4;
                    pointer -= 1;
                } else {
                    sum += 5;
                }
                break;
            case 'X':
                if (s[pointer - 1] && s[pointer - 1] === 'I') {
                    sum += 9;
                    pointer -= 1;
                } else {
                    sum += 10;
                }
                break;
            case 'L':
                if (s[pointer - 1] && s[pointer - 1] === 'X') {
                    sum += 40;
                    pointer -= 1;
                } else {
                    sum += 50;
                }
                break;
            case 'C':
                if (s[pointer - 1] && s[pointer - 1] === 'X') {
                    sum += 90;
                    pointer -= 1;
                } else {
                    sum += 100;
                }
                break;
            case 'D':
                if (s[pointer - 1] && s[pointer - 1] === 'C') {
                    sum += 400;
                    pointer -= 1;
                } else {
                    sum += 500;
                }
                break;
            case 'M':
                if (s[pointer - 1] && s[pointer - 1] === 'C') {
                    sum += 900;
                    pointer -= 1;
                } else {
                    sum += 1000;
                }
                break;
        }
        pointer--;
    }
    return sum;
};