var Backbone = require('backbone');
var PetModel = require('./petModel');

module.exports = Backbone.Collection.extend({
  url:'/top',
  model: PetModel,
  config: function(){},
  initialize: function(){},

});
