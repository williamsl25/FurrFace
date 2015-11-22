var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _= require('underscore');
var LogInView = require('./logInView');
var NewUserView = require('./newUserView');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var AsideView = require('./asideView');

module.exports = Backbone.View.extend({
  el: '.petProfile',
  initialize: function(loc){
    var self= this;
    if(loc === 'login'){
      var loginHTML = new LogInView();
      var headerHTML = new HeaderView();
      var footerHTML = new FooterView();
      var asideHTML = new AsideView();
        self.$el.find('header').html(headerHTML.render().el);
        self.$el.find('footer').html(footerHTML.render().el);
        self.$el.find('.petView').html(loginHTML.render().el);
        self.$el.find('aside').html(asideHTML.render().el);

    }
    else if(loc === 'newuser'){
      var newUserHTML = new NewUserView();
      self.$el.find('.petView').html(newUserHTML.render().el);
    }
    },



  });
