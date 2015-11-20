var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var LayOutView = require('./layoutView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'homePage',
    'about': 'aboutPage',
    'blahblah': 'someShit',
    'homePage': 'homePage'
  },
  initialize: function (options) {
    new LayoutView();
  },
  someShit: function () {
    console.log("some shits");
  },
  homePage: function () {
    console.log("you've made it to home!!");
  },
  aboutPage: function () {
    console.log("you've made it to the about page");
  }

});
