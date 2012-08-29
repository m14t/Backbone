define([
  'jquery',
  'backbone',
], function($, Backbone){
  var navigationView = Backbone.View.extend({
    el: $("#nav"),
    initialize: function() {
    },
    render: function() {
      $(this.el).html(this.app.nav.render());
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return new navigationView;
});
