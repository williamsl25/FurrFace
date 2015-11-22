var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _= require('underscore');
var HeaderView = require('./headerView');
var AsideView = require('./asideView');
var FooterView = require('./footerView');
var NeighborhoodView = require('./neighborhoodView')

module.exports = Backbone.View.extend({


  el: '.petView',
  initialize: function(){
    var self= this;
    var neighborhoodHTML = new NeighborhoodView();
      self.$el.find('.petView').html(neighborhoodHTML.render().el);
    },

  });
