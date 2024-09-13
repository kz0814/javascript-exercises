const reverseString = function(string) {
    
    let reverseWord = "";
    for (let i=string.length; i > 0 ; i--){
        reverseWord += string.charAt(i-1)
    }

    return reverseWord
};

// Do not edit below this line
module.exports = reverseString;
