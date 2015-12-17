'use strict';
// Load Models
let Feed    = require('./models/champion_tweets');
let Profile = require('./models/champion_profile');

// Expose routes
module.exports = function(app){

  // LoL Champions API Route

  app.get('/champions', function(req, res){
    request("http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion.json", function(){
      champions = parseJSON(res.body);
      console.log('Fetching champion data.')
      console.log(champions)
      res.send(champions)
    })
  })

  // TWITTER
  // get all champions
  // app.get('/api/champion/{{champion.name}}', {q: 'lol', count: 10 }

  // request("https://api.twitter.com/1.1/search/tweets.json?q=%23lol%20%23" + champ)
  //parse returned data
  // })


  // LOCAL ROUTES


}
