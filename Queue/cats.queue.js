'use strict';

const Queue = require('./Queue');
const CatData = require('../db/cats.json');

const Cat = new Queue();

// function seedDatabase(array) {
//   for (let i = 0; i < array.length; i++) {
//     catQueue.enqueue(array[i]);
//   }
// }

// seedDatabase(Cat);

CatData.map(cat => Cat.enqueue(cat));

function peek(queue) {
  return queue.head.value;
}

module.exports = { peek, Cat };