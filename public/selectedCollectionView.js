var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var SelectedView = require('./selectedModelView');
var PetModel = require('./petModel');
var AsideView = require('./asideView');


module.exports = Backbone.View.extend({
  el: ".petView",
  initialize: function(){
    this.addAll();
    var asideHTML = new AsideView();
    this.$el.find('aside').html(asideHTML.render().el);

  },
  addOne: function(petModel){
    var petView = new SelectedView({model: petModel});
    this.$el.append(petView.render().el);
  },
  addAll: function(){
    $('.petView').html("");
    _.each(this.collection.models, this.addOne, this);
  },

});
