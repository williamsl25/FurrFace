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
  events: {
    'click .notesubmit': 'comment',
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
    commentedOn.set({comments: comment });
    commentedOn.save();
    this.$('input').val("");
  },
  like: function(){
    // like other people's profiles and update likes
  },
  goTo: function(){
    // goTo single view
  },
});
