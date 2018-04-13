'use strict';

const Queue = require('./Queue');
const CatData = require('../db/cats.json');

const Cat = new Queue();

CatData.map(cat => Cat.enqueue(cat));

function peek(queue) {
  return queue.head.value;
}

module.exports = { peek, Cat };