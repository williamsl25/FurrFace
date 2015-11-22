var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var LayOutView = require('./layoutView');
var PetCollectionView = require('./collectionView');
var AllPetsCollection = require('./allPetsCollection');
var HomePageView = require('./homePageView');
var NewUserView = require('./newUserView');
var ProfileCollection = require('./profileCollection');
var ProfileCollectionView = require('./profileCollectionView');
var PetsLikeMeCollection = require('./petsLikeMeCollection');

module.exports = Backbone.Router.extend({
  routes: {
    'homePage': 'homePage',
    'myPet': 'editPet',
    'petsLikeMe': 'petLikeMe',
    'neighbors': 'Neighborhood',
    'top': 'topFuzzie',
    'newUser': 'newUser',
    '': 'login'
  },
  initialize: function (options) {
    new LayOutView('login');
  },
  login: function(){
    new LayOutView('login');
  },
  newUser: function(){
    new LayOutView('newuser');
  },
  homePage: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets});
      new HomePageView();
  });
  },
  editPet: function () {
    var profile = new ProfileCollection();
    profile.fetch().then(function () {
      new ProfileCollectionView({collection: profile});
  });
  },
  petLikeMe: function () {
    var petsLikeMe = new PetsLikeMeCollection();
    petsLikeMe.fetch().then(function () {
      new PetCollectionView({collection: petsLikeMe});
  });
  },
  Neighborhood: function () {
    var pets = new NeighborhoodCollection();
    pets.fetch().then(function () {
      new NeighborhoodView({collection: pets });
  });
  },
  topFuzzie: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  }

});
