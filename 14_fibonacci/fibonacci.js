const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS"
    }

    if (n == 0) {
        return 0;
    }

    let prev_new = 1;
    let prev_old = 0;

    for (let i = 2; i <= n; i++) {
        let current = prev_new + prev_old;
        prev_old = prev_new;
        prev_new = current;

    }

    return prev_new;



};

// Do not edit below this line
module.exports = fibonacci;
