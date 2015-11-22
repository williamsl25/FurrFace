var Backbone = require('backbone');
var PetModel = require('./petModel');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'pet',
  template: _.template(tmpl.pet),
  initialize: function(){},
  events: {
    'click .notesubmit': 'comment',
    'click .likes': 'like',
  },/*
  comment: function(event){
    event.preventDefault();
    var comment = $('input[name="thoughts"]').val();
    var commentedOn = this.model;
    console.log(typeof commentedOn.comments);
    if(commentedOn.getComments === null){
      commentedOn.set({comments: []});

    }
    console.log("post set: ", commentedOn.comments);
    commentedOn.set({comments: commentedOn.get('comments').push(commentedOn)});
    commentedOn.save();
    this.$('input').val("");
  },*/
  like: function(){
    // like other people's profiles and update likes
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
  }


});
