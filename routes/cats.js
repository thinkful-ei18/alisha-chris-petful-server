'use strict';

const express = require('express');
const router = express.Router();
const CatData = require('../db/cats.json');

const { peek, Cat } = require('../Queue/cats.queue');


/* ========== GET/READ ALL ITEM ========== */
router.get('/cat', (req, res) => {
  res.json(peek(Cat));
});

/* ========== DELETE THE FIRST ITEM ========== */
router.delete('/cat', (req, res) => {
  Cat.dequeue();
  if (!Cat.head) {
    CatData.map(cat => Cat.enqueue(cat));
  }
  res.json(peek(Cat));
});

module.exports = router;