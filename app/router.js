define([
  // Application.
  "app"
  // Modules.
  //"modules/example"
],

function(app /*, Example*/) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "/step/:id": "showStep",
      "/next": "nextStep"
    },

    index: function() {
      /*
      // Create a layout and associate it with the #main div.
      var layout = new Backbone.Layout({
        el: "#main"
      });

      // Insert the tutorial into the layout.
      layout.insertView(new Example.Views.Tutorial());
      
      // Render the layout into the DOM.
      layout.render();
      */
      app.nav.set({ 'ci': 0 });
    },

    showStep: function(id) {
      app.nav.set({ 'ci': parseInt(id,10) });
    },

    nextStep: function(id) {
      app.nav.next();
    }
  });

  return Router;

});
