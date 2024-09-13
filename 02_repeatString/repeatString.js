const repeatString = function(word,numberOfRepeat) {

    let repeatedwords= "";

    if(numberOfRepeat >= 0){
        for(i=0; i <numberOfRepeat;i++){
            repeatedwords+=word;
        }
    }else{
        return "ERROR"
    }

    return repeatedwords
};

// Do not edit below this line
module.exports = repeatString;
