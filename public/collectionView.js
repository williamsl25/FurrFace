var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var PetView = require('./modelView');
var PetModel = require('./petModel');

module.exports = Backbone.View.extend({
  el: ".petView",
  initialize: function(){
    $('.petView').css('width', '65%');
    this.addAll();
  },
  addOne: function(petModel){
    var petView = new PetView({model: petModel});
    this.$el.append(petView.render().el);
  },
  addAll: function(){
    $('.petView').html("");
    _.each(this.collection.models, this.addOne, this);
  },

});
