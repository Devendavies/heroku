'use strict';

//route requirements and secret
let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let Champ = require('../models/champ.js');

angular.module('lol-champ-feed', [])
  .controller('ChampionController', ChampionController)

router.route('/')
// retrieve all champions
.get((req, res, next) => {
  Champion.find({}, (err, champions) => {
  if(err) throw err;
  console.log(champions.name);
  res.send(champions);
  });
});


//route using specific name
router.route('/:name')
//retrieve and display a champion based on its name param
.get(function(req, res, next) {
  Champion.findByName(req.params).exec(function(err, champ){
    if(err) throw err;
    console.log(champ)
    res.send(champ);
  });
})

module.exports = routes;
