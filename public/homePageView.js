var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _= require('underscore');
var HeaderView = require('./headerView');
var AsideView = require('./asideView');
var FooterView = require('./footerView');

module.exports = Backbone.View.extend({
  el: '.petProfile',
  initialize: function(){
    var self= this;
    $('aside').removeClass('hidden');
    $('.petView').css('width', '65%');
    var headerHTML = new HeaderView();
    var asideHTML = new AsideView();
    var footerHTML = new FooterView();
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('aside').html(asideHTML.render().el);
      self.$el.find('footer').html(footerHTML.render().el);
      $('button').removeClass('hidden');

    },



  });
