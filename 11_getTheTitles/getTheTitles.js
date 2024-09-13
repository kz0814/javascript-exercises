const getTheTitles = function(booksArray) {
    const newArray = [];
    for (const book of booksArray){
        newArray.push(book.title)
    }

    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
