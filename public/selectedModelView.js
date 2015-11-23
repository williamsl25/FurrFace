var Backbone = require('backbone');
var PetModel = require('./petModel');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'selectedPet',
  template: _.template(tmpl.otherProfile),// remember to make ownProfile in template
  initialize: function(){},
  events:{
    'click .likes': 'like',

  },
  like: function (){
    var likedOne = this.model;
     likedOne.set({likes: likedOne.get('likes')+1});
     likedOne.save();
     console.log("this model ", this.model);
     console.log("likeOne", likedOne);
     this.render();
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },

});
