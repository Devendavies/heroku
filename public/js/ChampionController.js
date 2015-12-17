'use strict'
// Champion Controller
console.log("Champ Controller Loaded")


let ChampionController = {
  champs    : [],
  requestUrl: "http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion",
  // Send ALL Champ's Data to Page
  listEm: function(){
    let resultDiv = $("#champion-tile-template");
    resultDiv.empty();
    let template = Handlebars.compile($("#champion-tile-template").html());
    console.log("Before Append")
    console.log(ChampionController.champs.length);
    for(var i = 0; i < ChampionController.champs.length; i++) {
      console.log("Appending " + ChampionController.champs[i].champ.name);
      ChampionController.getTile(i);
      resultDiv.append(template(ChampionController.champs[i].champ.name));
    };
  },

  // Request ALL Champions from API
  getChamps: function(){
    $.ajax({
      url: ChampionController.requestUrl + '.json',
      type: 'GET',
      dataType: "json"
    }).done(function(res){
      console.log("Parsing");
      ChampionController.champs = ChampionController.parseData(res); // WHAT IS THE RESPONSE CALLED
      console.log("First champ after: " + ChampionController.champs[0].champ.name);
      ChampionController.listEm();
    })
  },
  // Champion Profile Page
  listOne: function(){
    let onlyOne = renderFeedTemplate();
    tempDiv.empty().append(ChampionController.onlyOne);
  },
  parseData: function(data){
    let jsonData = JSON.parse(JSON.stringify(data.data));
    let newData = [];
    for (var champ in data.data){
      newData.push({champ:data.data[champ]});
    }
    return newData;
  },
  getTile: function(index){
    ChampionController.champs
    var newElement = document.createElement('img');
    newElement.id = ChampionController.champs[index].champ.name;
    newElement.className = "champion-tile";
    newElement.source = "http://ddragon.leagueoflegends.com/cdn/5.7.2/img/champion/" + ChampionController.champs[index].champ.name.replace(". ", "").replace(' ', '').replace('\'', '') +".png";
    $( document.body ).append( newElement );
    document.getElementById(newElement.id).setAttribute("src", newElement.source);
    // document.getElementsByTagName(newElement.id).style.width = '50px';
    // document.getElementById(newElement.id).style.height = '50px';
  }
}
