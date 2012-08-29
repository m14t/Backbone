define([
  'jquery',
  'backbone',
], function($, Backbone){
  var mainView = Backbone.View.extend({
    el: $("#main"),
    initialize: function() {
    },
    render: function(html) {
      $(this.el).html(html);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return new mainView;
});
