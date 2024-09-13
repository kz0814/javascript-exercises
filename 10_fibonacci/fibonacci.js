const fibonacci = function(number) {

    if (number < 0) return "OOPS";
    let answer;
    let firstPrev = 1;
    let secondPrev = 0;

    if (number == 0 ){
        return 0
    }else if(number == 1){
        return 1
    }

    while(number > 1){
        answer = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = answer;
        number --;
    }
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
