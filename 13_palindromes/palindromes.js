const palindromes = function (str) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const clean_str = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    let rev_str = clean_str.split('').reverse().join('');

    return clean_str === rev_str;

};

// Do not edit below this line
module.exports = palindromes;
