var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var LayOutView = require('./layoutView');
var PetCollectionView = require('./collectionView');
var AllPetsCollection = require('./allPetsCollection');

module.exports = Backbone.Router.extend({
  routes: {
    'home': 'homePage',
    'mypet': 'editPet',
    'petslikeme': 'petLikeMe',
    'neighbors': 'Neighborhood',
    'top': 'topFuzzie',
  },
  initialize: function (options) {
    new LayOutView();
  },
  homePage: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  },
  editPet: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  },
  petLikeMe: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  },
  Neighborhood: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  },
  topFuzzie: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  }

});
