'use strict';

const Queue = require('./Queue');
const DogsData = require('../db/dogs.json');

const Dog = new Queue();

DogsData.map(dog => Dog.enqueue(dog));

const peek = queue => {
  return queue.head.value;
};

module.exports = { Dog, peek };
