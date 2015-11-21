var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _= require('underscore');
var LogInView = require('./logInView');
var NewUserView = require('./newUserView');


module.exports = Backbone.View.extend({
  el: '.petProfile',
  initialize: function(loc){
    var self= this;
    if(loc === 'login'){
      var loginHTML = new LogInView();

      self.$el.find('.petView').html(loginHTML.render().el);
    }
    else if(loc === 'newuser'){
      var newUserHTML = new NewUserView();
      self.$el.find('.petView').html(newUserHTML.render().el);
    }
    },



  });
