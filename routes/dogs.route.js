'use strict';

const express = require('express');
const router = express.Router();

const { peek, Dog } = require('../Queue/dog.queue');


router.get('/dog', (req, res, next) => {
  res.json(peek(Dog));
});


router.delete('/dog', (req, res, next) => {
  res.json(Dog.dequeue());
});

module.exports = router;