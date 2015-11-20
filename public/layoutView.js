var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _= require('underscore');
var LogInView = require('./logInView');


module.exports = Backbone.View.extend({
  el: '.petProfile',
  initialize: function(){
    var self= this;
    var loginHTML = new LogInView();

      self.$el.find('.petView').html(loginHTML.render().el);


    },



  });
