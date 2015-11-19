var $ = require('jquery');
var AllPetsCollection = require('./allPetsCollection');
var PetsView = require('./collectionView');

$(function () {
  var pets = new AllPetsCollection();
  pets.fetch().then(function () {
    new PetsView({collection: pets});
  });
});
