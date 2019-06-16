const HttpStatus = require("http-status-codes");
const faker = require("faker");
const models = require("../models/index");

exports.getIndex = (req, res) => {
  models.person.findAll().then(people => {
    res.status(HttpStatus.OK).send(people);
  });
};

exports.createPerson = (req, res) => {
  let person = {
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    number: req.body.number,
    relation: req.body.relation
  };

  models.person
    .create(person)
    .then(res => {
      res.status(HttpStatus.CREATED).send(person);
    })
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    });
};
