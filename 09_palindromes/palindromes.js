const palindromes = function (palindromes) {

    let punctuation = /[\.,?!]/g;
    palindromes = palindromes.replaceAll(" ","");
    palindromes = palindromes.replace(punctuation,"");
    palindromes = palindromes.toLowerCase();
    const palinArray = palindromes.split("");
    let backwardWord = palinArray.reverse().join("");
    
    return backwardWord === palindromes ;
};

// Do not edit below this line
module.exports = palindromes;
