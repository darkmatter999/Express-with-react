const express = require('express');
const animalsRouter = express.Router();

const animals = [{animal: 'cat'}, {animal: 'dog'}, {animal: 'elephant'}];
const animalArray = ['cat', 'dog', 'lion']

animalsRouter.get('/', (req, res, next) => {
    res.send(animalArray);
  });


animalsRouter.post('/', (req, res, next) => {
    animalArray.push(req.body.input)
});

  
  module.exports = animalsRouter;