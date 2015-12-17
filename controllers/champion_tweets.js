'use strict';

let Twit = require('twit');       // NOT INCLUDED YET
let fs = require('fs');           // INCLUDED ?
let mongojs = require('mongojs'); // INCLUDED ?
let express = require('express');
let router = express.Router();

angular.module('lol-champ-feed', [])
  .controller('FeedController', FeedController);

$twitter = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

// let champion = $('.champion-tile')

const CONSUMER_KEY = "6IBioMnssNk0WNOitSnhiLtWP";
const CONSUMER_SECRET = "Ofhl3GLmY1Wi15av7vXDh6rTF8bnhzo3USPLqhYN0mnf22N99N";
const ACCESS_TOKEN = "818848524-9ehIZea1T97NNVHPjXdZgkVu38b4mraF2Zmo5mBA";
const ACCESS_TOKEN_SECRET = "d1AFDiqvzXeAkboaGF0p9XXFZ57IC1wKS5nYomgkWxUmI";


// gets twitter cred
var T = new Twit({
    consumer_key:         CONSUMER_KEY,
    consumer_secret:      CONSUMER_SECRET,
    access_token:         ACCESS_TOKEN,
    access_token_secret:  ACCESS_TOKEN_SECRET
});

let connectionString = process.env.MONGO_URL ? process.env.MONGO_URL + '/tweets' : 'tweets';
let collectionName = 'LeageOfTweets';
let hashtag = '#LoL';
// let hashtagB = '#' + champion;

let db = mongojs(connectionString,[collectionName]);

T.get('search/tweets', {q: 'LoL',  count:10 },  (err, tweet) => {

  if (err) throw err;

  db.LeagueOfTweets.insert(tweet);
})


router.get('/tweets', (req, res, next) => {
  db.LeagueOfTweets.find().sort({ created_at: -1}, (err, tweets) => {
    if (err) throw err;

    res.json(tweets);
  });
});

module.exports = router;
