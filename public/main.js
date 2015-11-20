var $ = require('jquery');
var AllPetsCollection = require('./allPetsCollection');
var PetsView = require('./collectionView');
var LayOutView = require('./layoutView');
var Router = require('/routes');
var Backbone = require('backbone');


$(function () {
  var pets = new AllPetsCollection();
  pets.fetch().then(function () {
    //new PetsView({collection: pets});
    new Router();
    Backbone.history.start();

  });
});
