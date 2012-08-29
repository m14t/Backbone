define([
  'backbone'
], function(Backbone){
  var navigationModel = Backbone.Model.extend({
    defaults: {
      pages: [
        {
          'title': "page 1",
          'body': "page 1 body"
        },
        {
          'title': "page 2",
          'body': "page 2 body"
        },
        {
          'title': "page 3",
          'body': "page 3 body"
        },
        {
          'title': "page 4",
          'body': "page 4 body"
        }
      ],
      ci: null,
      max_page: 0
    },

    validate: function( attributes ){
      if ( attributes.ci > attributes.pages.length ){
        return "That page does not exits";
      }
      if ( attributes.ci > attributes.max_page ){
        return "You are not allowed to go that far forward";
      }
    },

    initialize: function() {
      this.bind("error", function(model, error){
        // We have received an error, log it, alert it or forget it :)
        console.log( error );
      });
    },

    getPage: function(i) {
      return this.get('pages')[i];
    },

    getCurrentPage: function() {
      return this.getPage(this.get('ci'));
    },

    next: function() {
      var c = this.get('ci') || 0,
          m = this.get('max_page');
      if (
        1+c > m &&
        m != this.get('pages').length
      ) {
        m++;
      this.set({'max_page': m});
      this.set({'ci': 1+c});
      }
    },

    render: function() {
      var html = '',
          i = 0,
          nav = this;

      html += '<ul>';
      console.log(nav.get('ci'));
      _.forEach(nav.get('pages'), function(p) {
        if ( i === nav.get('ci') ) {
          html += '<li class="selected">';
        } else {
          html += '<li>';
        }
        html += '<a href="#/step/'+i+'">'+ p.title +'</a></li>';
        i++;
      });
      html += '<li><a href="#/next">next &raquo;</a></li>';
      html += '</ul>';
      return html;
    }
  });
  // You usually don't return a model instantiated
  return navigationModel;
});
