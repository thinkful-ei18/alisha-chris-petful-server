'use strict';

const express = require('express');
const router = express.Router();

const { peek, Dog } = require('../Queue/dog.queue');
const DogsData = require('../db/dogs.json');


router.get('/dog', (req, res, next) => {
  res.json(peek(Dog));
});


router.delete('/dog', (req, res, next) => {
  Dog.dequeue();
  if (!Dog.head) {
    DogsData.map(dog => Dog.enqueue(dog));
  }
  res.json(peek(Dog));
});

module.exports = router;