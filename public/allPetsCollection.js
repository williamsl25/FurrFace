var Backbone = require('backbone');
var PetModel = require('./petModel');

module.exports = Backbone.Collection.extend({
  url:'/users',
  model: PetModel,
  config: function(){},
  initialize: function(){},

});
