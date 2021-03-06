(function(namespace) {

  var views = namespace.views;

  var Router = Backbone.Router.extend({
    
    routes: {
      '%(routeName)s': 'main',
    },

    main: function() {
      App.loadingBar.show();
      new views.Main({
        el: $('#container')
      });
    },

  });

  new Router();

})(%(namespace)s);