var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var NeighborhoodModelView= require('./neighborhoodModelView');
var PetModel = require('./petModel');

module.exports = Backbone.View.extend({
  el: ".petView",
  initialize: function(){
    this.addAll();
  },
  addOne: function(petModel){
    var petView = new NeighborhoodModelView({model: petModel});
    this.$el.append(petView.render().el);
  },
  addAll: function(){
    $('.petView').html("");
    _.each(this.collection.models, this.addOne, this);
  },

});
