const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}


const findTheOldest = function (people) {
    return people.reduce((person_1, person_2) => {
        const age_person_1 = getAge(person_1.yearOfBirth, person_1.yearOfDeath);
        const age_person_2 = getAge(person_2.yearOfBirth, person_2.yearOfDeath);
        return age_person_1 < age_person_2 ? person_2 : person_1;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
