var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var LayOutView = require('./layoutView');
var PetCollectionView = require('./collectionView');
var AllPetsCollection = require('./allPetsCollection');
var HomePageView = require('./homePageView');
var NewUserView = require('./newUserView');

module.exports = Backbone.Router.extend({
  routes: {
    'homePage': 'homePage',
    'mypet': 'editPet',
    'petslikeme': 'petLikeMe',
    'neighbors': 'Neighborhood',
    'top': 'topFuzzie',
    'newUser': 'newUser'
  },
  initialize: function (options) {
    new LayOutView('login');
  },
  newUser: function(){
    new LayOutView('newuser');
  },
  homePage: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
      new HomePageView();
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
