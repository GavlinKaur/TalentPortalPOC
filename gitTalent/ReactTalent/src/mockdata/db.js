// programs.js
const faker = require('faker');

const generateprograms = () => {
    var programs = []
    //Generate 2 records
    for (var id = 0; id < 5; id++) {
        var randTag = faker.random.arrayElement(["Diversity", "BlackDuck"]);
        programs.push({
            "id": id,
            "program_name": faker.name.title(),
            "description": faker.name.jobDescriptor(),
            "tag": randTag,
        })
    }

    return { "programs": programs }
}

module.exports = generateprograms