const sumAll = function (num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";

    let num = 0;

    for (i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        num += i;
    }

    return num;

};

// Do not edit below this line
module.exports = sumAll;
