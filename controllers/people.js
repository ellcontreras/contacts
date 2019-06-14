const HttpStatus = require("http-status-codes");
const faker = require("faker");

exports.getIndex = (req, res) => {
  let people = [];

  for (let i = 0; i < 10; i++) {
    people.push({
      name: faker.name.title(),
      email: faker.internet.email(),
      number: faker.phone.phoneNumber(),
      relation: faker.hacker.abbreviation()
    });
  }

  res.status(HttpStatus.OK).send(people);
};
