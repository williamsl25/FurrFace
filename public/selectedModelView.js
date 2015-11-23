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
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },

});
