var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var LayOutView = require('./layoutView');
var PetCollectionView = require('./collectionView');
var AllPetsCollection = require('./allPetsCollection');

module.exports = Backbone.Router.extend({
  routes: {
    //'': 'homePage',
    'about': 'aboutPage',
    'blahblah': 'someShit',
    'homePage': 'homePage'
  },
  initialize: function (options) {
    new LayOutView();
  },
  someShit: function () {
    console.log("some shits");
  },
  homePage: function () {
    var pets = new AllPetsCollection();
    pets.fetch().then(function () {
      new PetCollectionView({collection: pets });
  });
  },
  aboutPage: function () {
    console.log("you've made it to the about page");
  }

});
