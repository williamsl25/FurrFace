var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');


module.exports = Backbone.View.extend({
  template: _.template(tmpl.aside),
  initialize: function(){

  },
  render: function(){
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },
  sortType: function(){

  },
  sortNeighborhood: function(){

  },
  sortAge: function(){

  },
  goToProfile: function(){

  }
});
