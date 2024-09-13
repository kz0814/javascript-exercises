const removeFromArray = function(arrayOfnumber,...elementRemove) {

    const newArray = arrayOfnumber.filter(element => !elementRemove.includes(element));

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
