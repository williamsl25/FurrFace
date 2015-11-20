var Backbone = require('backbone');
var PetModel = require('./petModel');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'pet',
  template: _.template(tmpl.otherProfile),// remember to make otherProfile in template
  initialize: function(){},
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  comment: function(){
    //comment on someone else's profile
  },
  like: function(){
    // like someone else's profile
  },


});
