var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');


module.exports = Backbone.View.extend({
  className: 'theFoot',
  template: _.template(tmpl.footer),
  initialize: function(){

  },
  render: function(){
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },
});
