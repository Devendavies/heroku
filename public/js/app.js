'use strict'

console.log('APP LOADED'); // Test
//------------------------------------
// Controllers Injection
//------------------------------------

// ChampionController.$inject = ['$http'];
// FeedController.$inject = ['$http'];

//-------------------------------------------------------------------------
//                         Template/Handlebar Actions
//-------------------------------------------------------------------------

$(document).ready(function(){

  console.log('javascript LOADED!'); // Test

  // MOVE TO CHAMP FEED CONTROLLER
  //  let renderFeedTemplate     = Handlebars.compile($('template#tweets').html());
  // $('body').on('click', '.champion-tile', renderFeedTemplate);

   //------------------------------------
   //        API Authentication
   //------------------------------------

  // LoL api

  // const lolAPIKey = "8fa8fbd8-e1de-4895-bcd6-1b1577547aae"; // Secure with scope later
  // let API_KEY = '?api_key=' + lolAPIKey;  // Format for Leauge API URL
  // let requestUrl     = 'https://na.api.pvp.net/api/lol/static-data/{region}/v1.2/versions/champion';

  // 3rd Party LoL Data Host Option
  // let requestUrl = 'http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion';

  // Check League Servers Status
  // let leagueStatus   = 'status.leagueoflegends.com';

  //------------------------------------
  //         Global Functions
  //------------------------------------

  // Site Intro Page
  let renderFacepage = function(){
    let resultDiv = $(".horizontal");
    let template = Handlebars.compile($('#facepage-template').html());

    // let champDiv = $(".relays-div");
    ('div').empty;
    // champDiv.empty();

    resultDiv.empty().append(template);
  };

  renderFacepage(); // Initialize With Template

  //------------------------------------
  //           Click Events
  //------------------------------------

  $('body').on('click', '.goToFacepage',  renderFacepage); // change 'body'
});

$(function() {
  console.log("click event loaded");
  $('.champ-select').on('click', function(){
    console.log("Champ Select Button Pressed");
    ChampionController.getChamps();
    console.log("end click event")
  });
});

$(function() {
  console.log("click backup loaded");
  $('.champ-select').on('click', function(){

    let resultDiv = $(".horizontal");
    // let champDiv = $(".relays-div");
    resultDiv.empty();
    // champDiv.empty();

    resultDiv = $(".returns-div");
    let template = Handlebars.compile($('#allChamps').html());
    resultDiv.append(template);
  });
});

// Profile
$(function() {
  console.log("click profile loaded");
  $('#humpa').on('click', function(){

    resultDiv = $(".returns-div");
    resultDiv.empty();

    let championProfile = $(".relays-div");
    let template = Handlebars.compile($('#twitterFeed').html());
    championProfile.empty().append(template);

    let champion = "Amumu";
  });
});
