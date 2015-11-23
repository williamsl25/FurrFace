var Backbone = require('backbone');
var PetModel = require('./petModel');

module.exports = Backbone.Collection.extend({
  url: function(){

    return "/test?id=" + this.userID;
  },
  model: PetModel,
  config: function(){},
  initialize: function(options){
    this.userID = options.userID;
    console.log(this.userID);
  },

});
