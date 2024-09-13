const sumAll = function(start,end) {

    let sum = 0;

    if (start >= 0 && end >= 0 && Number.isInteger(start) && Number.isInteger(end)){

        if (end < start) {
            let temp = start;
            start = end;
            end = temp;
        }

        for (let i = start ; i <= end ; i++){
            sum += i;
        }

        return sum
    }

    return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
