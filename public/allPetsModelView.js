var Backbone = require('backbone');
var PetModel = require('./petModel');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'pet',
  template: _.template(tmpl.otherProfile),
  urlRoot: '/users',
  events: {
    'click .notesubmit': 'comment',
    'click .likes': 'like',
  },
  initialize: function(){},
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  comment: function(event){
    event.preventDefault();
    var comment = $('input[name="thoughts"]').val();
    var commentedOn = this.model;
    commentedOn.set({comments: comment});
    commentedOn.save();
    this.$('input').val("");
  },
  like: function(){
    // like other people's profiles and update likes
    var likedOne = this.model
      likedOne.set({likes: likedOne.get('likes')+1});
      likedOne.save();
      likedOne.render();
  },
  goTo: function(){
    // goTo single view
  },
});
