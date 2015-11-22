var Backbone = require('backbone');
var PetModel = require('./petModel');

module.exports = Backbone.Collection.extend({
  url:'/users?petType',
  model: PetModel,
  config: function(){},
  initialize: function(){},

});
