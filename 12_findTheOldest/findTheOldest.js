const findTheOldest = function(people) {
    let oldestPerson = null; 
    const currentYear = new Date().getFullYear();

    for (const person of people) {
        if (!person.yearOfDeath) person.yearOfDeath = currentYear;

        let age = person.yearOfDeath - person.yearOfBirth;

        if (oldestPerson === null || age > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
            oldestPerson = person;
        }
    }

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
