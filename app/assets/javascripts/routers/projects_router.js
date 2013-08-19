Portfolio.Routers.Projects = Backbone.Router.extend({
  routes: {
    '':'index'
  },
  initialize: function(){
    this.collection = new Portfolio.Collections.Projects();
    this.collection.fetch({reset: true});
  },
  index: function() {
    var view = new Portfolio.Views.ProjectsIndex({ collection: this.collection });
    $('#container').html(view.render().el);
  }
});
